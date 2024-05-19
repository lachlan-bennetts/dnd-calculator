import { PrismaClient } from "@prisma/client";
import { ISaveCharacterClass } from "../utils/interfaces";
import { Logger } from "../utils/Logger";

export class CharacterClassRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveCharacterClass(saveCharacterClassTemplate: ISaveCharacterClass, logger: Logger, correlationId: string) {
    logger.info(`Commencing saveCharacterClass within CharacterClassRepository with correlationId ${correlationId}`, saveCharacterClassTemplate);
    const saveCharacterClass = await this.prisma.characterClass.create({
      data: saveCharacterClassTemplate
    });

    return saveCharacterClass;
  }
}