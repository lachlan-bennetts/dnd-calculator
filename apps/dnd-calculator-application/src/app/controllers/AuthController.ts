import express, { Request, Response, Router } from 'express';
import { postReqCreateUser } from '../middleware/AuthMiddleware'
import { CreateUserDto } from '../dtos/AuthDto';
import { AuthService } from '../services/AuthService';
import { Logger } from '../utils/Logger';


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
      // Add more routes as needed
    }

    private handleGetRequest(req: Request, res: Response) {
      // Handle GET request logic here
      res.send('GET request received from calculator');
    }

    private handleCreateUserReq = async (req: Request, res: Response) => {
      try {
        const { error, value } = postReqCreateUser(req.body);
        if(error) {
          this.logger.error(`Error: ${error}`);
          return res.sendStatus(400);
        } else {
          this.logger.info('Success');
        }
          const userInfo: CreateUserDto = req.body;
    
          await this.authService.createUser(userInfo);
          res.send('POST request received');
        } catch (error) {
          console.log('Error', error);
          res.send(error.status);
      }
    }

    public getRouter(): Router {
        return this.router;
    }
}

