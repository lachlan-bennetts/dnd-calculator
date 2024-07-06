import { PrismaClient } from '@prisma/client';
import { Logger } from '../utils/Logger';

export class BackgroundRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async collectAllBackgrounds(logger: Logger) {
    try {
      const allBackgrounds = await this.prisma.background.findMany();
      return allBackgrounds;
    } catch (err) {
      logger.error(`Error retrieving all backgrounds`);
      throw err;
    }
  }
}
