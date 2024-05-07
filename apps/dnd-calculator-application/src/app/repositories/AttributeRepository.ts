import { PrismaClient } from "@prisma/client";

export class AttributeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

}