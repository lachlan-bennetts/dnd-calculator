import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger"
import { CharacterRepository } from "../repositories/CharacterRepository";
import { mapCharacterSheetInfo, saveCharacterMapper } from "../mapper/CharacterMapper";
import { ClassRepository } from "../repositories/ClassRepository";
import { CharacterClassRepository } from "../repositories/CharacterClassRepository";
import { mapNewCharacterClass } from "../mapper/CharacterClassMapper";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../utils/CustomError";
import { AttributeEnum, ClassEnum, SpellcastingClasses, spellSlots } from "../utils/constants";
import { inspect } from "util";
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
  private logger: Logger;
  private characterRepository: CharacterRepository;
  private characterClassRepository: CharacterClassRepository;
  private userRepository: UserRepository;
  private classService: ClassService
  private raceService: RaceService;
  private spellService: SpellService;

  constructor(inheritLogger: Logger) {
    this.logger = inheritLogger;
    this.characterRepository = new CharacterRepository(inheritLogger);
    this.characterClassRepository = new CharacterClassRepository();
    this.userRepository = new UserRepository();
    this.classService = new ClassService(inheritLogger)
    this.raceService = new RaceService(inheritLogger)
    this.spellService = new SpellService(inheritLogger)
  }

  async createNewCharacter(requestBody: saveCharacterDto) {
    try{
      // Check if user exists
      const userExists = await this.userRepository.retrieveUserById(requestBody.userId)
      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      // Check if character of same name for user already exists
      const characterName = requestBody.characterName
      const characterNames = await this.characterRepository.retrieveCharacterNames(requestBody.userId, this.logger)
      if(characterNames && characterNames.includes(characterName)) {
        throw new CustomError("Character name already exists for user", 400)
      }

      // Map Character
      // Due to the nature of class, race and background being largely static tables, we've used a foreign key relationship with strings, not needing a join.
      const saveCharacterTemplate = this.mapCharacterSave(requestBody)


      // Using a const as we will need to access the attributes of the character later
      const newCharacter = await this.characterRepository.saveCharacter(saveCharacterTemplate)

      // Character Class Portion
      const className = requestBody.class
      this.logger.info(`Finding class with className ${className}`)
      const correspondingClass = await this.classService.findClass(className)
      if(!correspondingClass) {
        this.logger.error(`Class ${className} does not exist `)
        this.characterRepository.deleteCharacter(newCharacter.characterId, this.logger)
        throw new CustomError("Class does not exist", 404)
      }
      this.logger.info(`Found class with className ${className}`)

      // Business Logic for Spellcasting Attribute
      const spellCastingAttr = correspondingClass.spellCastingAttribute as AttributeEnum
      this.logger.info(`Spellcasting attribute is ${spellCastingAttr}`)
      const characterId = newCharacter.characterId
      const newCharacterClassTemp = mapNewCharacterClass(className, characterId, spellCastingAttr, requestBody)
      console.log("New Character Class Temp", newCharacterClassTemp)
      await this.characterClassRepository.saveCharacterClass(newCharacterClassTemp, this.logger)
      return {
        message: "Character created successfully",
        characterId: characterId
      }
    } catch(error) {
      this.logger.error(`An error has occurred, ${error}`)
      throw error
    }
  }

  mapCharacterSave(characterData: saveCharacterDto) {
    this.logger.info('Commencing mapCharacterSave within CharacterService')
    const characterMapped = saveCharacterMapper(characterData, this.logger)
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
  async getCharacters(userId: string) {
    try {
      this.logger.info(`Check user exists with userId ${userId}`)
      const userExists = await this.userRepository.retrieveUserById(userId)
      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      this.logger.info(`Commencing getCharacters within CharacterService `)
      const charactersInfo = await this.characterRepository.retrieveCharacters(userId, this.logger)
      this.logger.info(`CharacterInfo retrieved successfully , ${inspect(charactersInfo)}`)
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
      this.logger.info(`CharacterList mapped successfully , ${inspect(characterList)}`)
      return characterList
    } catch(error) {
      this.logger.error(`An error has occurred, ${error}`)
      throw error 
    }
  }

  async getCharacterInfo(characterId: string) {
    try {
      this.logger.info(`Commencing getCharacterInfo within CharacterService `)
      const characterData = await this.characterRepository.retrieveCharacterInfo(characterId, this.logger)      
      if (!characterData || characterData === null) {
        this.logger.error(`Character does not exist with characterId ${characterId}`)
        throw new CustomError("Character does not exist", 404)
      }
      this.logger.info(`characterData retrieved successfully , ${inspect(characterData)}`)

      // Need to display class Spells and Abilities. Spells can be easily done through active Spells table
      const characterClassIds = characterData.characterClasses.map((characterClass) => characterClass.characterClassId)
      const classNames = characterData.characterClasses.map((characterClass) => characterClass.className)

      const backgroundInfo = mapCharacterBackgroundInfo(characterData.background, this.logger)
      const raceInfo = await this.raceService.collectRelevantRaceData(characterData.subRace, characterData.level) 
      const classInfoObj = await this.classService.retrieveClassInfo(classNames, characterData.characterClasses)
      const activeSpells = await this.spellService.mapActiveSpells(characterClassIds)

      const infoObj: ICharacterAux = {
        raceInfo,
        classInfo: classInfoObj,
        backgroundInfo,
        activeSpells
      }

      const characterInfoResponse = mapCharacterSheetInfo(characterData, infoObj, this.logger)

      return characterInfoResponse
    }

   catch(err: any) {
    this.logger.error(`An error has occurred in getCharacterInfo  and error ${err}`)
    throw err
    }
  }


  async deleteCharacter(characterId: string, userId: string) {
    try {
      this.logger.info(`Commencing deleteCharacter within CharacterService `)
      const characterEntity = await this.characterRepository.retrieveCharacterInfo(characterId, this.logger)
      if(!characterEntity) {
        this.logger.error(`Character does not exist with characterId ${characterId}`)
        throw new CustomError("Character does not exist", 404)
      }
      if(characterEntity.userId !== userId) {
        this.logger.error(`User does not own character with characterId ${characterId}`)
        throw new CustomError("User does not own character", 403)
      }

      this.logger.info(`Deleting characterClass with characterId ${characterId}`)
      const characterClassIds = characterEntity.characterClasses.map((characterClass) => characterClass.characterClassId)
      await this.characterClassRepository.deleteCharacterClasses(characterClassIds, this.logger)
      this.logger.info(`CharacterClass deleted successfully with characterId ${characterId}`)

      this.logger.info(`Deleting character with characterId ${characterId}`)
      await this.characterRepository.deleteCharacter(characterId, this.logger)
      this.logger.info(`Character deleted successfully with characterId ${characterId}`)
      return {
        message: "Character deleted successfully"
      }
    } catch(err: any) {
      this.logger.error(`An error has occurred in deleteCharacter  and error ${err}`)
      throw err
    }
  }
}