import {PrismaClient} from '@prisma/client'
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/AuthDto';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userInfo: CreateUserDto) {
    try {
      console.log('Creating user', userInfo)
  
      const existingUser = await this.userRepository.retrieveUserByEmail(userInfo.email);
      if (existingUser) {
        throw new Error('User already exists');
      }
      const passwordHash = await this.hashPassword(userInfo.password);
      console.log('Hashed password', passwordHash)
      userInfo.password = passwordHash;
  
      return await this.userRepository.createUser(userInfo);
    } catch (error) {
      console.log('Error creating user within UserService', error);
      throw new Error(error);
    }
  }

  async hashPassword(password: string) {
    console.log('Hashing password', password);
    return await bcrypt.hash(password, 10);
  }
}