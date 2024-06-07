import { PrismaClient } from '@prisma/client';
import { ISaveUser } from '../utils/interfaces';


export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createUser(userInfo: ISaveUser) {
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

  async retrieveUserByUsername(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username: username
      }
    });
  }
}