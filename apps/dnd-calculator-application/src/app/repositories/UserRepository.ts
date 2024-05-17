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

  async retrieveUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    });
  }

  async retrieveUserById(userId: string) {
    return await this.prisma.user.findUnique({
      where: {
        userId: userId
      }
    });
  }
}