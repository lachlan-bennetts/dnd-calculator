import { PrismaClient } from "@prisma/client";

export class CharacterRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async saveCharacter(characterInfo) {
     this.prisma.character.create({
      data: characterInfo
     })
  }
}