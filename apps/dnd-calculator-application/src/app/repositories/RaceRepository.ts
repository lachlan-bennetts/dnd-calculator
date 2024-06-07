import { PrismaClient, Race } from "@prisma/client";
import { Logger } from "../utils/Logger";

export class RaceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findRaceByName(raceName: string): Promise<Race | null> {
    const retrievedRace = await this.prisma.race.findFirst({
      where: {
        subRace: raceName
      },
    })
    return retrievedRace
  }

  async retrieveRaceAndFeatures(raceName: string, logger: Logger) {
    try {
      const raceAndFeatures = await this.prisma.race.findFirst({
        where: {
          subRace: raceName
        },
        include: {
          features: true
        }
      })
      return raceAndFeatures
    } catch(err) {
      logger.error(`Error retrieving raceData from raceName ${raceName} `)
      throw err
    }
  }
}