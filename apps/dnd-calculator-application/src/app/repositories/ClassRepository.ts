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

  async retrieveClassesByNames(classNames: string[], logger: Logger, correlationId: string) {
    try {
      const retrievedClasses = await this.prisma.class.findMany({
        where: {
          className: {
            in: classNames
          }
        },
        include: {
          classFeatures: true
        }
      })
      return retrievedClasses
    } catch(err) {
      logger.error(`Error getting classes for names ${classNames} and correlationId ${correlationId}, ${err}`)
      throw err
    }
  }
}