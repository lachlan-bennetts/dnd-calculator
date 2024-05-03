import express, { Request, Response, Router } from 'express';
import { postReqCreateUser } from '../middleware/AuthMiddleware'
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserDto } from '../dtos/AuthDto';


export class AuthContoller {
    private router: Router;
    private userRepository: UserRepository;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
        this.userRepository = new UserRepository();
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

    private handleCreateUserReq = (req: Request, res: Response) => {
      // Handle POST request logic here
      const { error, value } = postReqCreateUser(req.body);

      if(error) {
        console.log('Error', error);
        return res.sendStatus(400);
      } else {
        console.log('Success', value);
      }

      const userInfo: CreateUserDto = req.body;

      this.userRepository.createUser(userInfo);
      res.send('POST request received');
    }

    public getRouter(): Router {
        return this.router;
    }
}

