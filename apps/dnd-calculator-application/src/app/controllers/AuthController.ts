import express, { NextFunction, Request, Response, Router } from 'express';
import { postReqCreateUser } from '../middleware/AuthMiddleware'
import { CreateUserDto } from '../dtos/AuthDto';
import { AuthService } from '../services/AuthService';
import { Logger } from '../utils/Logger';
import { CustomError } from '../utils/CustomError';


export class AuthContoller {
    private router: Router;
    private authService: AuthService;
    private logger: Logger;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
        this.authService = new AuthService();
        this.logger = new Logger();
    }

    private initializeRoutes() {
      this.router.get('/', this.handleGetRequest);
      this.router.post('/createUser', this.handleCreateUserReq);
      this.router.post('/login', this.handleLoginReq);
      // Add more routes as needed
    }

    private handleGetRequest(req: Request, res: Response) {
      // Handle GET request logic here
      res.send('GET request received from calculator');
    }

    private handleCreateUserReq = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { error, value } = postReqCreateUser(req.body);
        if(error) {
          this.logger.error(`Error: ${error}`);
          return res.sendStatus(400);
        } else {
          this.logger.info('Success');
        }
          const userInfo: CreateUserDto = req.body;
    
          await this.authService.createUser(userInfo, this.logger);
          res.status(201).json({ message: 'User created successfully' });
        } catch (err: any) {
          console.log('Error', err);
          if (err instanceof CustomError) {
            next(err)
          }
          const error = new CustomError('An error has occured in handleCreateUser', 500)
          next(error)
      }
    }

    private handleLoginReq(req: Request, res: Response) {
      // Handle POST request logic here
      res.send('POST request received');
    }

    public getRouter(): Router {
        return this.router;
    }
}

