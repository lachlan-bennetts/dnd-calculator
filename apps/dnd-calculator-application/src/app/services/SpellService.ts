import { Logger } from "../utils/Logger";
import { SpellRepository } from "../repositories/ActiveSpellRepository";
import { mapLearntSpells } from "../mapper/SpellMapper";

export class SpellService {
  spellRepository: SpellRepository;
  logger: Logger

  constructor(inheritLogger: Logger) {
    this.logger = inheritLogger
    this.spellRepository = new SpellRepository()
  }

  async mapActiveSpells(characterClassIds: string[]) {
    try {
      this.logger.info(`Commencing retrieveActiveSpells within SpellService `)
      const retrievedSpells = await this.spellRepository.retrieveActiveSpells(characterClassIds, this.logger)
      const mappedSpells = mapLearntSpells(retrievedSpells, this.logger)
      return mappedSpells
    } catch(err) {
      this.logger.error(`An error has occurred in mapActiveSpells , ${err}`)
      throw err
    }
  }


}