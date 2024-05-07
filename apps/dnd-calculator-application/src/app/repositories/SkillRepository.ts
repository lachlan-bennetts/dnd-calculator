import { PrismaClient } from "@prisma/client";

export class SkillRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

}