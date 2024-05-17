import { PrismaClient, Race } from "@prisma/client";

export class RaceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findRaceByName(raceName: string): Promise<Race> {
    const retrievedRace = await this.prisma.race.findFirst({
      where: {
        subRace: raceName
      },
    })
    return retrievedRace
  }
}