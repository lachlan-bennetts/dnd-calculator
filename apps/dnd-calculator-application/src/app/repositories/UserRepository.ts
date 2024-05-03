import { PrismaClient } from '@prisma/client';

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createUser(userInfo) {
    return await this.prisma.user.create({
      data: {
        email: userInfo.email,
        password: userInfo.password,
        username: userInfo.username,
      }
    })
  }
}