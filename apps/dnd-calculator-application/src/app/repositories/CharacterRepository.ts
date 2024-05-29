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

  async retrieveCharacters(userId: string, logger: Logger, correlationId: string) {
    logger.info(`Getting characters for user ${userId} and correlationId ${correlationId}`)
    try {
      const getCharacters = await this.prisma.character.findMany({
        where: {
          userId: userId
        },
        include: {
          characterClasses: true,
        }
      })
      return getCharacters
    } catch (error) {
      logger.error(`Error getting characters for user ${userId} and correlationId ${correlationId}`)
      throw error
    }
  }

  async retrieveCharacterInfo(characterId: string, logger: Logger, correlationId: string) {
    logger.info(`Getting character info for character ${characterId} and correlationId ${correlationId}`)
    try {
      const getCharacter = await this.prisma.character.findFirst({
        where: {
          characterId: characterId
        },
        include: {
          characterClasses: true,
          inventory: true,
          race: true,
          background: true,
        }
      })
      return getCharacter
    } catch (error) {
      logger.error(`Error getting character info for character ${characterId} and correlationId ${correlationId}`)
      throw error
    }
  }

  async retrieveCharacterNames(userId: string, logger: Logger, correlationId: string) {
    logger.info(`Getting characters with retrieveCharacters Method for user ${userId} and correlationId ${correlationId}`)
    try{
      const characterNames = await this.prisma.character.findMany({
        where: {
          userId: userId
        },
        select: {
          characterName: true,
        }
      })
      return characterNames.map((character) => character.characterName)
    } catch (error) {
      logger.error(`Error getting character names for user ${userId} and correlationId ${correlationId}`)
      throw error
    }
  }
}