import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger"
import { CharacterRepository } from "../repositories/CharacterRepository";
import { mapCharacterInfo, mapCharacterSheetInfo, saveCharacterMapper } from "../mapper/CharacterMapper";
import { ClassRepository } from "../repositories/ClassRepository";
import { CharacterClassRepository } from "../repositories/CharacterClassRepository";
import { mapNewCharacterClass } from "../mapper/CharacterClassMapper";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../utils/CustomError";
import { AttributeEnum, ClassEnum, SpellcastingClasses, spellSlots } from "../utils/constants";
import { inspect } from "util";
import { SpellRepository } from "../repositories/ActiveSpellRepository";
import { ICharacterRaceInfo, RaceService } from "./RaceService";
import { ClassService } from "./ClassService";
import { ICharacterBackground, mapCharacterBackgroundInfo } from "../mapper/BackgroundMapper";
import { SpellService } from "./SpellService";

export interface ICharacterAux {
  raceInfo: ICharacterRaceInfo,
  classInfo: any,
  backgroundInfo: ICharacterBackground,
  activeSpells: any
}

export interface IDelPayload {
  userId: string,
  characterId: string
}

export class CharacterService {
  private characterRepository: CharacterRepository;
  private classRepository: ClassRepository;
  private logger: Logger;
  private characterClassRepository: CharacterClassRepository;
  private userRepository: UserRepository;
  private classService: ClassService
  private raceService: RaceService;
  private spellService: SpellService;

  constructor() {
    this.characterRepository = new CharacterRepository();
    this.classRepository = new ClassRepository();
    this.characterClassRepository = new CharacterClassRepository();
    this.userRepository = new UserRepository()
    this.classService = new ClassService()
    this.raceService = new RaceService()
    this.spellService = new SpellService()
    this.logger = new Logger();
  }

  async createNewCharacter(requestBody: saveCharacterDto, correlationId: string) {
    try{
      // Check if user exists
      const userExists = await this.userRepository.retrieveUserById(requestBody.userId)
      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      // Check if character of same name for user already exists
      const characterName = requestBody.characterName
      const characterNames = await this.characterRepository.retrieveCharacterNames(requestBody.userId, this.logger, correlationId)
      if(characterNames && characterNames.includes(characterName)) {
        throw new CustomError("Character name already exists for user", 400)
      }

      // Map Character
      // Due to the nature of class, race and background being largely static tables, we've used a foreign key relationship with strings, not needing a join.
      const saveCharacterTemplate = this.mapCharacterSave(requestBody, correlationId)


      // Using a const as we will need to access the attributes of the character later
      const newCharacter = await this.characterRepository.saveCharacter(saveCharacterTemplate)

      // Character Class Portion
      const className = requestBody.class
      this.logger.info(`Finding class with className ${className} and correlationId ${correlationId}`)
      const correspondingClass = await this.classRepository.findClassByName(className)
      if(!correspondingClass) {
        this.logger.error(`Class ${className} does not exist with correlationId ${correlationId}`)
        this.characterRepository.deleteCharacter(newCharacter.characterId, this.logger, correlationId)
        throw new CustomError("Class does not exist", 404)
      }
      this.logger.info(`Found class with className ${className} and correlationId ${correlationId}`)

      // Business Logic for Spellcasting Attribute
      const spellCastingAttr = correspondingClass.spellCastingAttribute as AttributeEnum
      this.logger.info(`Spellcasting attribute is ${spellCastingAttr} and correlationId ${correlationId}`)
      const characterId = newCharacter.characterId
      const newCharacterClassTemp = mapNewCharacterClass(className, characterId, spellCastingAttr, requestBody)
      console.log("New Character Class Temp", newCharacterClassTemp)
      await this.characterClassRepository.saveCharacterClass(newCharacterClassTemp, this.logger, correlationId)
      return {
        message: "Character created successfully",
        characterId: characterId
      }
    } catch(error) {
      this.logger.error(`An error has occured, ${error}`)
      throw error
    }
  }

  mapCharacterSave(characterData: saveCharacterDto, correlationId: string) {
    this.logger.info('Commencing mapCharacterSave within CharacterService')
    const characterMapped = saveCharacterMapper(characterData, this.logger, correlationId)
    if(!characterMapped) {
      this.logger.error('Error mapping character')
      throw new CustomError('Error mapping character', 400)
    }
    this.logger.info('Character mapped successfully')
    return characterMapped
  }

  getInitialSpellSlots(characterLevel: number, characterClass: ClassEnum): number[] {
    this.logger.info('Commencing getSpellSlots within CharacterService')
    if (characterLevel == 1 && SpellcastingClasses.includes(characterClass)) {
      this.logger.info('Character is level 1 and has spellcasting class')
      return spellSlots[characterLevel]
    }
    this.logger.info(`Character is level 1 with no spellcasting class`)
    return []
  }

  // Get list of characters you have, don't need heaps of info, just names classes and levels
  async getCharacters(userId: string, correlationId: string) {
    try {
      this.logger.info(`Check user exists with userId ${userId} and correlationId ${correlationId}`)
      const userExists = await this.userRepository.retrieveUserById(userId)
      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      this.logger.info(`Commencing getCharacters within CharacterService with correlationId ${correlationId}`)
      const charactersInfo = await this.characterRepository.retrieveCharacters(userId, this.logger, correlationId)
      this.logger.info(`CharacterInfo retrieved successfully with correlationId ${correlationId}, ${inspect(charactersInfo)}`)
      const characterList = charactersInfo.map((character) => {
      const characterClasses = character.characterClasses.map((characterClass) => ({
        className: characterClass.className,
        classLevel: characterClass.classLevel
      }))
      // Work on mapping the character info to a more readable format, also sorting for most recently edited
        return {
          characterName: character.characterName,
          class: characterClasses,
          level: character.level,
          race: character.subRace,
          background: character.backgroundName
        }
      })
      this.logger.info(`CharacterList mapped successfully with correlationId ${correlationId}, ${inspect(characterList)}`)
      return characterList
    } catch(error) {
      this.logger.error(`An error has occured, ${error}`)
      throw error 
    }
  }

  async getCharacterInfo(characterId: string, correlationId: string) {
    try {
      this.logger.info(`Commencing getCharacterInfo within CharacterService with correlationId ${correlationId}`)
      const characterData = await this.characterRepository.retrieveCharacterInfo(characterId, this.logger, correlationId)      
      if (!characterData || characterData === null) {
        this.logger.error(`Character does not exist with characterId ${characterId} and correlationId ${correlationId}`)
        throw new CustomError("Character does not exist", 404)
      }
      this.logger.info(`characterData retrieved successfully with correlationId ${correlationId}, ${inspect(characterData)}`)

      // Need to display class Spells and Abilities. Spells can be easily done through active Spells table
      const characterClassIds = characterData.characterClasses.map((characterClass) => characterClass.characterClassId)
      const classNames = characterData.characterClasses.map((characterClass) => characterClass.className)

      const backgroundInfo = mapCharacterBackgroundInfo(characterData.background, this.logger, correlationId)
      const raceInfo = await this.raceService.collectRelevantRaceData(characterData.subRace, characterData.level, correlationId) 
      const classInfoObj = await this.classService.retrieveClassInfo(classNames, characterData.characterClasses, correlationId)
      const activeSpells = await this.spellService.mapActiveSpells(characterClassIds, correlationId)

      const infoObj: ICharacterAux = {
        raceInfo,
        classInfo: classInfoObj,
        backgroundInfo,
        activeSpells
      }

      const characterInfoResponse = mapCharacterSheetInfo(characterData, infoObj, this.logger, correlationId)

      return characterInfoResponse
    }

   catch(err: any) {
    this.logger.error(`An error has occured in getCharacterInfo with correlationId ${correlationId} and error ${err}`)
    throw err
    }
  }


  async deleteCharacter(characterId: string, userId: string, correlationId: string) {
    try {
      this.logger.info(`Commencing deleteCharacter within CharacterService with correlationId ${correlationId}`)
      const characterEntity = await this.characterRepository.retrieveCharacterInfo(characterId, this.logger, correlationId)
      if(!characterEntity) {
        this.logger.error(`Character does not exist with characterId ${characterId} and correlationId ${correlationId}`)
        throw new CustomError("Character does not exist", 404)
      }
      if(characterEntity.userId !== userId) {
        this.logger.error(`User does not own character with characterId ${characterId} and correlationId ${correlationId}`)
        throw new CustomError("User does not own character", 403)
      }

      this.logger.info(`Deleting characterClass with characterId ${characterId} and correlationId ${correlationId}`)
      const characterClassIds = characterEntity.characterClasses.map((characterClass) => characterClass.characterClassId)
      await this.characterClassRepository.deleteCharacterClasses(characterClassIds, this.logger, correlationId)
      this.logger.info(`CharacterClass deleted successfully with characterId ${characterId} and correlationId ${correlationId}`)

      this.logger.info(`Deleting character with characterId ${characterId} and correlationId ${correlationId}`)
      await this.characterRepository.deleteCharacter(characterId, this.logger, correlationId)
      this.logger.info(`Character deleted successfully with characterId ${characterId} and correlationId ${correlationId}`)
      return {
        message: "Character deleted successfully"
      }
    } catch(err: any) {
      this.logger.error(`An error has occured in deleteCharacter with correlationId ${correlationId} and error ${err}`)
      throw err
    }
  }
}