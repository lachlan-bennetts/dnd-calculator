import {PrismaClient} from '@prisma/client'
import { UserRepository } from '../repositories/UserRepository';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userInfo) {
    return await this.userRepository.createUser(userInfo);
  }
}