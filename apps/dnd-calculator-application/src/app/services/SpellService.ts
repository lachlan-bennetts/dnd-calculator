import { Logger } from "../utils/Logger";
import { SpellRepository } from "../repositories/ActiveSpellRepository";
import { mapLearntSpells } from "../mapper/SpellMapper";

export class SpellService {
  spellRepository: SpellRepository;
  logger: Logger

  constructor() {
    this.spellRepository = new SpellRepository()
    this.logger = new Logger()
  }

  async mapActiveSpells(characterClassIds: string[], correlationId: string) {
    try {
      this.logger.info(`Commencing retrieveActiveSpells within SpellService with correlationId ${correlationId}`)
      const retrievedSpells = await this.spellRepository.retrieveActiveSpells(characterClassIds, this.logger, correlationId)
      const mappedSpells = mapLearntSpells(retrievedSpells, this.logger, correlationId)
      return mappedSpells
    } catch(err) {
      this.logger.error(`An error has occured in mapActiveSpells with correlationId ${correlationId}, ${err}`)
      throw err
    }
  }


}