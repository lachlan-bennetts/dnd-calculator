import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger";

export interface ISaveCharacter {
  playerName: string;
  characterName: string;
  armourClass: number;
  currentHitPoints: number;
  maxHitPoints: number;
  tempHitPoints: number;
  speed: number;
  background: string;
  race: string;
}

export const saveCharacterMapper = (requestBody: saveCharacterDto, logger: Logger) => {
  try {
    logger.info('Commencing saveCharacter mapping from requestBody')
    const saveCharacterModel: ISaveCharacter = {
      playerName: requestBody.playerName,
      characterName: requestBody.characterName,
      armourClass: requestBody.armourClass,
      currentHitPoints: requestBody.currentHitPoints,
      maxHitPoints: requestBody.maxHitPoints,
      tempHitPoints: requestBody.tempHitPoints,
      speed: requestBody.speed,
      background: requestBody.background,
      race: requestBody.race
    }
    logger.info('saveCharacter mapping successful')
    return saveCharacterModel
  } catch(error) {
    logger.error('saveCharacter mapping failed', error)
    throw error
  }
}