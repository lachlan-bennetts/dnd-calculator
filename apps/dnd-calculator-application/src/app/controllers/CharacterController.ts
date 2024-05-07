import express, { Request, Response, Router } from 'express';
import { postReqCalculate } from '../middleware/CalculatorMiddleware'
import { CalculatorService } from '../services/CalculatorService';
import { postReqCreateCharacter } from '../middleware/CharacterMiddleware';
import { CharacterService } from '../services/CharacterService';
import { Logger } from '../utils/Logger';
import { v4 as uuidv4 } from 'uuid';

class CharacterController {
    private router: Router;
    private characterService: CharacterService;
    private logger: Logger

    constructor() {
        this.router = express.Router();
        this.characterService = new CharacterService()
        this.logger = new Logger()
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.handleGetRequest);
        this.router.post('/', this.handleCreateCharacter);
        // Add more routes as needed
    }

    private handleGetRequest(req: Request, res: Response) {
        // Handle GET request logic here
        res.send('GET request received from calculator');
    }

    private handleCreateCharacter = (req: Request, res: Response) => {     
        const correlationId = uuidv4()
        try {
          const { error, value } = postReqCreateCharacter(req.body);
          if (error) {
              this.logger.error('Error', error);
              return res.sendStatus(400);
          } else {
              this.logger.info('Success', value);
          }
  
          this.characterService.createCharacter(req.body, this.logger)
          res.send('POST request received');
        } catch (error) {
          this.logger.error(`Error has occured at handleCreateCharacter with correlationId ${correlationId} and error ${error}`)
          throw error
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default CharacterController;
