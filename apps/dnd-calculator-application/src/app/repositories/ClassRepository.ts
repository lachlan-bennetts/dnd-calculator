import { Class, PrismaClient } from "@prisma/client";
import { Logger } from "../utils/Logger";
import { IClassModel, IClassName } from "../utils/interfaces";


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

  async retrieveClassesByNames(classNames: string[], logger: Logger) {
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
      logger.error(`Error getting classes for names ${classNames}, ${err}`)
      throw err
    }
  }

  async retrieveAllClasses(logger: Logger): Promise<IClassModel[]> {
    logger.info(`Retrieving all classes`)
    const allClasses = await this.prisma.class.findMany(
      {
        include: {
          classFeatures: true
        }
      }
    )
    return allClasses
  }
}