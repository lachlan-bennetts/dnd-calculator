import { PrismaClient } from "@prisma/client";
import { Logger } from "../utils/Logger";

export class ClassFeatureRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async retrieveClassFeatures(className: string[], logger: Logger, correlationId: string) {
    try {
      logger.info(`Getting class features for class ${className} and correlationId ${correlationId}`)
      const classFeatures = await this.prisma.classFeature.findMany({
        where: {
          className: {
            in: className
          }
        }
      })
      return classFeatures
    } catch(err) {
      logger.error(`Error getting class features for class ${className} and correlationId ${correlationId}`)
      throw err
    }
  }
}