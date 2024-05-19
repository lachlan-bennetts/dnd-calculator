import express, { Request, Response, Router } from 'express';
import { getReqCharacters, postReqCreateCharacter } from '../middleware/CharacterMiddleware';
import { CharacterService } from '../services/CharacterService';
import { Logger } from '../utils/Logger';
import { v4 as uuidv4 } from 'uuid';

class CharacterController {
	private router: Router;
	private characterService: CharacterService;
	private logger: Logger
	private correlationId: string

	constructor() {
		this.router = express.Router();
		this.characterService = new CharacterService()
		this.logger = new Logger()
		this.correlationId = uuidv4()
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get('/getCharacters', this.handleGetCharacters);
		this.router.post('/createCharacter', this.handleCreateCharacter);
		// Add more routes as needed
	}

	private handleGetCharacters(req: Request, res: Response) {
		try {
			const {error, value} = getReqCharacters(req.headers);
			if (error) {
				this.logger.error('Error', error);
				return res.sendStatus(400);
			} else {
				this.logger.info('Success', value);
			}

			const userId = req.headers['user-id']

			if(userId === '' || typeof userId !== 'string') {
				this.logger.error('User ID is missing from request')
				return res.sendStatus(400)
			}

			this.characterService.getCharacters(userId, this.correlationId)
			res.send('GET request received from calculator');
		} catch(error: any) {
			this.logger.error(`Error has occured at handleGetCharacters with correlationId ${this.correlationId} and error ${error}`)
			throw error
		}
	}

	private handleCreateCharacter = (req: Request, res: Response) => {     
		try {
		  const { error, value } = postReqCreateCharacter(req.body);
		  if (error) {
			  this.logger.error('Error', error);
			  return res.sendStatus(400);
		  } else {
			  this.logger.info('Success', value);
		  }
  
		  this.characterService.createNewCharacter(req.body, this.correlationId)
		  res.status(201).json({ message: 'Character created successfully' });
		} catch (error) {
		  this.logger.error(`Error has occured at handleCreateCharacter with correlationId ${this.correlationId} and error ${error}`)
		  throw error
		}
	}

	public getRouter(): Router {
		return this.router;
	}
}

export default CharacterController;
