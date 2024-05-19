import { PrismaClient } from "@prisma/client";
import { ISaveCharacter } from "../mapper/CharacterMapper";
import { Logger } from "../utils/Logger";

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

  async deleteCharacter(characterId: string, logger: Logger, correlationId: string) {
    logger.info(`Deleting character with ${characterId} and correlationId ${correlationId}`)
    const deleteCharacter = await this.prisma.character.delete({
      where: {
        characterId: characterId
      }
    })
    return deleteCharacter
  }

  async retrieveCharacterInfo(userId: string, logger: Logger, correlationId: string) {
    logger.info(`Getting characters for user ${userId} and correlationId ${correlationId}`)
    try {
      const getCharacters = await this.prisma.character.findMany({
        where: {
          userId: userId
        },
        include: {
          race: true,
          background: true,
          characterClasses: true,
          Inventory: true,
        }
      })
      return getCharacters
    } catch (error) {
      logger.error(`Error getting characters for user ${userId} and correlationId ${correlationId}`)
      throw error
    }
  }
}