import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/AuthDto';
import { Logger } from '../utils/Logger';

export class AuthService {
  private userRepository: UserRepository;
  private logger: Logger;

  constructor(inheritLogger: Logger) {
    this.userRepository = new UserRepository();
    this.logger = inheritLogger;
  }

  async createUser(userInfo: CreateUserDto) {
    try {
      this.logger.info(`Creating user, ${userInfo}`)
  
      // Have to bring to frontend, research later.
      const existingEmail = await this.userRepository.retrieveUserByEmail(userInfo.email);
      if (existingEmail) {
        throw new Error('User already exists');
      }
      const existingUsername = await this.userRepository.retrieveUserByUsername(userInfo.username);
      if(existingUsername) {
        throw new Error('Username already exists');
      }

      const passwordHash = await this.hashPassword(userInfo.password);
      this.logger.info(`Hashed password, ${passwordHash}`)
      userInfo.password = passwordHash;
  
      return await this.userRepository.createUser(userInfo);
    } catch (error: any) {
      console.log('Error creating user within UserService', error);
      throw error;
    }
  }

  async hashPassword(password: string) {
    console.log('Hashing password', password);
    return await bcrypt.hash(password, 10);
  }
}