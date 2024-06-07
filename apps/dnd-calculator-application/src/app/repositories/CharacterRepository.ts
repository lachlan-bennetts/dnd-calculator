import { PrismaClient } from "@prisma/client";
import { ISaveCharacter } from "../mapper/CharacterMapper";
import { Logger } from "../utils/Logger";

export class CharacterRepository {
  private prisma: PrismaClient;
  private logger: Logger;

  constructor(inheritLogger: Logger) {
    this.prisma = new PrismaClient()
    this.logger = inheritLogger
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

  async deleteCharacter(characterId: string, logger: Logger) {
    logger.info(`Deleting character with ${characterId}`)
    try {
      const deleteCharacter = await this.prisma.character.delete({
        where: {
          characterId: characterId
        }
      })
      return deleteCharacter
    } catch(err) {
      logger.error(`Error deleting character with ${characterId}`)
      throw err
    }
  }

  async retrieveCharacters(userId: string, logger: Logger) {
    logger.info(`Getting characters for user ${userId}`)
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
      logger.error(`Error getting characters for user ${userId}`)
      throw error
    }
  }

  async retrieveCharacterInfo(characterId: string, logger: Logger) {
    logger.info(`Getting character info for character ${characterId}`)
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
    } catch (err) {
      logger.error(`Error getting character info for character ${characterId}`)
      throw err
    }
  }

  async retrieveCharacterNames(userId: string, logger: Logger) {
    logger.info(`Getting characters with retrieveCharacters Method for user ${userId}`)
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
    } catch (err) {
      logger.error(`Error getting character names for user ${userId}`)
      throw err
    }
  }
}