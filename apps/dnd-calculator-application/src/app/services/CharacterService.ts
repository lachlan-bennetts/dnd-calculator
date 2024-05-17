import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger"
import { CharacterRepository } from "../repositories/CharacterRepository";
import { saveCharacterMapper } from "../mapper/CharacterMapper";
import { ClassRepository } from "../repositories/ClassRepository";
import { CharacterClassRepository } from "../repositories/CharacterClassRepository";
import { RaceRepository } from "../repositories/RaceRepository";
import { mapNewCharacterClass } from "../mapper/CharacterClassMapper";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../utils/CustomError";


export class CharacterService {
  private characterRepository: CharacterRepository;
  private classRepository: ClassRepository;
  private logger: Logger;
  private characterClassRepository: CharacterClassRepository;
  private raceRepository: RaceRepository;
  private userRepository: UserRepository;

  constructor() {
    this.characterRepository = new CharacterRepository();
    this.classRepository = new ClassRepository();
  }

  async createNewCharacter(requestBody: saveCharacterDto, correlationId) {
    try{
      // Check if user exists
      this.userRepository = new UserRepository()
      const userExists = await this.userRepository.retrieveUserById(requestBody.userId)

      if(!userExists) {
        throw new CustomError("User does not exist", 404)
      }

      
      // Save Base Character
      // Due to the nature of class, race and background being largely static tables, we've used a foreign key relationship with strings, not needing a join.
      this.logger.info('Commencing createCharacter within CharacterService')
      const saveCharacterTemplate = saveCharacterMapper(requestBody, this.logger)

      // Using a const as we will need to access the attributes of the character later
      const newCharacter = await this.characterRepository.saveCharacter(saveCharacterTemplate)

      // Character Class Portion
      const className = requestBody.class
      const correspondingClass = await this.classRepository.findClassByName(className)
      this.logger.info(`Found class with className ${className} and correlationId ${correlationId}`)

      // Business Logic for Spellcasting Attribute
      const spellCastingAttr = correspondingClass.spellCastingAttribute
      const characterId = newCharacter.characterId
      const newCharacterClassTemp = mapNewCharacterClass(className, characterId, spellCastingAttr, requestBody)
      await this.characterClassRepository.saveCharacterClass(newCharacterClassTemp)
    } catch(error) {
      this.logger.error("An error has occured", error)
      throw error
    }
  }
}