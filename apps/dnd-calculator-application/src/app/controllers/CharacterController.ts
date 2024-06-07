import express, { Request, Response, Router, NextFunction } from 'express';
import { deleteReqCharacter, getReqCharacterInfo, getReqCharacters, postReqCreateCharacter } from '../middleware/CharacterMiddleware';
import { CharacterService } from '../services/CharacterService';
import { Logger } from '../utils/Logger';
import { v4 as uuidv4 } from 'uuid';
import { CustomError } from '../utils/CustomError';

class CharacterController {
	private router: Router;
	private characterService: CharacterService;
	private logger: Logger

	constructor() {
		this.router = express.Router();
		this.logger = new Logger()
		this.characterService = new CharacterService(this.logger)
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get('/characters', this.handleGetCharacters);
		this.router.get('/characters/character', this.handleGetCharacterInfo)
		this.router.post('/createCharacter', this.handleCreateCharacter);
		this.router.delete('/characters/character', this.deleteCharacter)
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
				this.logger.error('User ID is missing from request', error)
				return res.sendStatus(400)
			}

			const result = await this.characterService.getCharacters(userId)
			res.status(200).json(result);
		} catch(err: any) {
		  this.logger.error(`Error has occurred at handleGetCharacters  and error ${err}`)
			if (err instanceof CustomError) {
				next(err)
			}
			const error = new CustomError(err.message, 500)
			next(error)
		}
	}

	private handleGetCharacterInfo = async (req: Request, res: Response, next: NextFunction) => {
		try{
			const {error, value} = getReqCharacterInfo(req.headers);
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

			const result = await this.characterService.getCharacterInfo(characterId)
			res.status(200).json(result);
		} catch(err: any) {
			this.logger.error(`Error has occurred at handleGetCharacterInfo  and error ${err}`)
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
  
		  const result = await this.characterService.createNewCharacter(req.body)
		  res.status(201).json(result);
		} catch (err: any) {
		  this.logger.error(`Error has occurred at handleCreateCharacter  and error ${err}`)
		  if (err instanceof CustomError) {
				next(err)
			}
			const error = new CustomError(err.message, 500)
			next(error)
		}
	}

	private deleteCharacter = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { error, value } = deleteReqCharacter(req.headers);
			if (error) {
				this.logger.error('Error', error);
				return res.sendStatus(400);
			} else {
				this.logger.info('Success', value);
			}

			const characterId = req.headers['character-id']
			const userId = req.headers['user-id']

			if(characterId === '' || typeof characterId !== 'string') {
				this.logger.error('Character ID is missing from request')
				throw new CustomError('Character ID is missing from request', 400)
			}

			if(userId === '' || typeof userId !== 'string') {
				this.logger.error('User ID is missing from request')
				throw new CustomError('User ID is missing from request', 400)
			}

			const result = await this.characterService.deleteCharacter(characterId, userId)
			res.status(200).json(result);
		} catch(err: any) {
			this.logger.error(`Error has occurred at deleteCharacter  and error ${err}`)
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
