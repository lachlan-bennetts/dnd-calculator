import { Class, PrismaClient } from "@prisma/client";
import { Logger } from "../utils/Logger";

export class ClassRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findClassByName(className: string): Promise<Class | null> {
    const retrievedClass = await this.prisma.class.findFirst({
      where: {
        className: className
      },
    })

    return retrievedClass
  }

  async  retrieveClassAndFeatures(classNames: string[], logger: Logger, correlationId: string): Promise<Class[]> {
    logger.info(`Getting classes for ${classNames} and correlationId ${correlationId}`)
    try {
      const getClasses = await this.prisma.class.findMany({
        where: {
          className: {
            in: classNames
          }
        },
        include: {
          classFeatures: true
        }
      })
      return getClasses
    } catch (error) {
      logger.error(`Error getting classes for ${classNames} and correlationId ${correlationId}`)
      throw error
    }
  }
}