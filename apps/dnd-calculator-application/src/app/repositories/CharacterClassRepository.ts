import { PrismaClient } from "@prisma/client";
import { ISaveCharacterClass } from "../utils/interfaces";

export class CharacterClassRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveCharacterClass(saveCharacterClassTemplate: ISaveCharacterClass) {
    const saveCharacterClass = await this.prisma.characterClass.create({
      data: saveCharacterClassTemplate
    });

    return saveCharacterClass;
  }
}