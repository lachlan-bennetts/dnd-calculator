import { PrismaClient } from "@prisma/client";
import { ISaveCharacterClass } from "../utils/interfaces";
import { Logger } from "../utils/Logger";

export class CharacterClassRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveCharacterClass(saveCharacterClassTemplate: ISaveCharacterClass, logger: Logger) {
    logger.info(`Commencing saveCharacterClass within CharacterClassRepository `, saveCharacterClassTemplate);
    const saveCharacterClass = await this.prisma.characterClass.create({
      data: saveCharacterClassTemplate
    });

    return saveCharacterClass;
  }

  async deleteCharacterClasses(characterClassId: string[], logger: Logger) {
    logger.info(`Commencing deleteCharacterClass within CharacterClassRepository `, characterClassId);
    const deleteCharacterClass = await this.prisma.characterClass.deleteMany({
      where: {
        characterClassId: {
          in: characterClassId
        }
      },
    });
    return deleteCharacterClass;
  }
}