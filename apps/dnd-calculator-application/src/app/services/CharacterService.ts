import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger"
import { CharacterRepository } from "../repositories/CharacterRepository";
import { AttributeRepository } from "../repositories/AttributeRepository";
import { SkillRepository } from "../repositories/SkillRepository";
import { saveCharacterMapper } from "../mapper/CharacterMapper";



export class CharacterService {
  private characterRepository: CharacterRepository;
  private attributeRepository: AttributeRepository;
  private skillRepository: SkillRepository;

  constructor() {
    this.characterRepository = new CharacterRepository();
    this.attributeRepository = new AttributeRepository();
    this.skillRepository = new SkillRepository();
  }

  async createCharacter(requestBody: saveCharacterDto,logger: Logger) {
    try{
      logger.info('Commencing creatrCharacter within CharacterService')
      const saveCharacterTemplate = saveCharacterMapper(requestBody, logger)
      
      

      this.characterRepository.saveCharacter(saveCharacterTemplate)

      
    } catch(error) {
      logger.error("An error has occured", error)
    }
  }
}