import { PrismaClient } from "@prisma/client";
import { ISaveCharacter } from "../mapper/CharacterMapper";

export class CharacterRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async saveCharacter(characterInfo: ISaveCharacter) {
     this.prisma.character.create({
      data: {
        playerName: characterInfo.playerName,
        characterName: characterInfo.characterName,
        armourClass: characterInfo.armourClass,
        
      }
     })
  }
}