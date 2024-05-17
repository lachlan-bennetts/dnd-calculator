import { Class, PrismaClient } from "@prisma/client";
import { Logger } from "winston";

export class ClassRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findClassByName(className: string): Promise<Class> {
    const retrievedClass = await this.prisma.class.findFirst({
      where: {
        className: className
      },
    })

    return retrievedClass
  }
}