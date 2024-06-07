import { PrismaClient } from "@prisma/client";
import { Logger } from "../utils/Logger";

export class SpellRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async retrieveActiveSpells(characterClassIds: string[], logger: Logger) {
    try {
      logger.info(`Getting active spells for class ${characterClassIds}`)
      const activeSpells = await this.prisma.characterSpell.findMany({
        where: {
          characterClassId: {
            in: characterClassIds
          }
        },
        include: {
          spell: true
        }
      })
      return activeSpells
    } catch(err) {
      logger.error(`Error getting active spells for class ${characterClassIds}`)
      throw err
    }
  }
}