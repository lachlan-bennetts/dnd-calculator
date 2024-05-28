import express, { Request, Response, Router, NextFunction } from 'express';
import { getReqCharacters, postReqCreateCharacter } from '../middleware/CharacterMiddleware';
import { CharacterService } from '../services/CharacterService';
import { Logger } from '../utils/Logger';
import { v4 as uuidv4 } from 'uuid';
import { CustomError } from '../utils/CustomError';

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
		this.router.get('/characters', this.handleGetCharacters);
		this.router.post('/createCharacter', this.handleCreateCharacter);
		// Add more routes as needed
	}

	private handleGetCharacters = async (req: Request, res: Response, next: NextFunction) => {
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

			const result = await this.characterService.getCharacters(userId, this.correlationId)
			res.status(200).json(result);
		} catch(err: any) {
		  this.logger.error(`Error has occured at handleGetCharacters with correlationId ${this.correlationId} and error ${err}`)
			if (err instanceof CustomError) {
				next(err)
			}
			const error = new CustomError(err.message, 500)
			next(error)
		}
	}

	private handleGetCharacterInfo = async (req: Request, res: Response, next: NextFunction) => {
		try{
			const {error, value} = getReqCharacters(req.headers);
			if (error) {
				this.logger.error('Error', error);
				return res.sendStatus(400);
			} else {
				this.logger.info('Success', value);
			}

			const characterId = req.headers['character-id']

			if(characterId === '' || typeof characterId !== 'string') {
				this.logger.error('Character ID is missing from request')
				throw new CustomError('Character ID is missing from request', 400)
			}

			const result = await this.characterService.getCharacterInfo(characterId, this.correlationId)
			res.status(200).json(result);
		} catch(err: any) {
			this.logger.error(`Error has occured at handleGetCharacterInfo with correlationId ${this.correlationId} and error ${err}`)
		  if (err instanceof CustomError) {
				next(err)
			}
			const error = new CustomError(err.message, 500)
			next(error)
		}
	}

	private handleCreateCharacter = async (req: Request, res: Response, next: NextFunction) => {     
		try {
		  const { error, value } = postReqCreateCharacter(req.body);
		  if (error) {
			  this.logger.error('Error', error);
			  return res.sendStatus(400);
		  } else {
			  this.logger.info('Success', value);
		  }
  
		  const result = await this.characterService.createNewCharacter(req.body, this.correlationId)
		  res.status(201).json(result);
		} catch (err: any) {
		  this.logger.error(`Error has occured at handleCreateCharacter with correlationId ${this.correlationId} and error ${err}`)
		  if (err instanceof CustomError) {
				next(err)
			}
			const error = new CustomError(err.message, 500)
			next(error)
		}
	}

	public getRouter(): Router {
		return this.router;
	}
}

export default CharacterController;
