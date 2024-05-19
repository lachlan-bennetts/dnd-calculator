import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger"
import { CharacterRepository } from "../repositories/CharacterRepository";
import { saveCharacterMapper } from "../mapper/CharacterMapper";
import { ClassRepository } from "../repositories/ClassRepository";
import { CharacterClassRepository } from "../repositories/CharacterClassRepository";
import { mapNewCharacterClass } from "../mapper/CharacterClassMapper";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../utils/CustomError";
import { AttributeEnum } from "../utils/constants";


export class CharacterService {
  private characterRepository: CharacterRepository;
  private classRepository: ClassRepository;
  private logger: Logger;
  private characterClassRepository: CharacterClassRepository;
  private userRepository: UserRepository;

  constructor() {
    this.characterRepository = new CharacterRepository();
    this.classRepository = new ClassRepository();
    this.characterClassRepository = new CharacterClassRepository();
    this.userRepository = new UserRepository()
    this.logger = new Logger();
  }

  async createNewCharacter(requestBody: saveCharacterDto, correlationId: string) {
    try{
      // Check if user exists
      const userExists = await this.userRepository.retrieveUserById(requestBody.userId)
      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      // Save Base Character
      // Due to the nature of class, race and background being largely static tables, we've used a foreign key relationship with strings, not needing a join.
      this.logger.info('Commencing createCharacter within CharacterService')
      const saveCharacterTemplate = saveCharacterMapper(requestBody, this.logger)
      this.logger.info(`saveCharacterTemplate produced successfully with correlationId ${correlationId}`)

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
      const spellCastingAttr = correspondingClass.spellCastingAttribute
      const spellCastingAttrEnum = spellCastingAttr as AttributeEnum
      this.logger.info(`Spellcasting attribute is ${spellCastingAttr} and correlationId ${correlationId}`)
      const characterId = newCharacter.characterId
      const newCharacterClassTemp = mapNewCharacterClass(className, characterId, spellCastingAttrEnum, requestBody)
      await this.characterClassRepository.saveCharacterClass(newCharacterClassTemp, this.logger, correlationId)
    } catch(error) {
      this.logger.error(`An error has occured, ${error}`)
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

  async getCharacters(userId: string, correlationId: string) {
    try {
      this.logger.info(`Commencing getCharacters within CharacterService with correlationId ${correlationId}`)
      const characters = await this.characterRepository.retrieveCharacterInfo(userId, this.logger, correlationId)
      this.logger.info(`Characters retrieved successfully with correlationId ${correlationId}`)
      return characters
    } catch(error) {
      this.logger.error(`An error has occured, ${error}`)
      throw error
    }
  }
}