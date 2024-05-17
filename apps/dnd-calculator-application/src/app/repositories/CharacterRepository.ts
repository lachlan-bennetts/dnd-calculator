import { PrismaClient } from "@prisma/client";
import { ISaveCharacter } from "../mapper/CharacterMapper";

export class CharacterRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async saveCharacter(characterInfo: ISaveCharacter) {
     const saveNewCharacter = await this.prisma.character.create({
      data: {
        playerName: characterInfo.playerName,
        characterName: characterInfo.characterName,
        level: characterInfo.level,
        currentSpeed: characterInfo.currentSpeed,
        armourClass: characterInfo.armourClass,
        maxHitPoints: characterInfo.maxHitPoints,
        currentHitPoints: characterInfo.currentHitPoints,
        proficiencyBonus: characterInfo.proficiencyBonus,
        alignment: characterInfo.alignment,
        attributeArray: characterInfo.attributeArray,
        skillArray: characterInfo.skillsArray,
        subRace: characterInfo.race,
        backgroundName: characterInfo.background,
        userId: characterInfo.user,
      }
     })
    return saveNewCharacter
  }
}