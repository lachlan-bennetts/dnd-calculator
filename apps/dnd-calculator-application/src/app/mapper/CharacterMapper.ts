import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger";
import { BackgroundEnum, RaceEnum, SkillEnum } from "../utils/constants";

export interface ISaveCharacter {
  playerName: string;
  characterName: string;
  level: number;
  armourClass: number;
  currentHitPoints: number;
  maxHitPoints: number;
  proficiencyBonus: number;
  alignment: string;
  attributeArray: number[];
  skillsArray: number[];
  currentSpeed: number;
  background: string;
  race: string;
  user: string;
}

export const saveCharacterMapper = (requestBody: saveCharacterDto, logger: Logger, correlationId: string) => {
  try {
    logger.info('Commencing saveCharacter mapping from requestBody with correlationId: ' + correlationId)
    const saveCharacterModel: ISaveCharacter = {
      playerName: requestBody.playerName,
      characterName: requestBody.characterName,
      level: 1,
      currentSpeed: requestBody.speed,
      armourClass: 10,
      maxHitPoints: requestBody.maxHitPoints,
      currentHitPoints: requestBody.maxHitPoints,
      proficiencyBonus: 2,
      alignment: requestBody.alignment,
      attributeArray: requestBody.attributeArray,
      skillsArray: requestBody.skillsArray,
      race: requestBody.race,
      background: requestBody.background,
      user: requestBody.userId
    }
    logger.info(`saveCharacter mapping successful with ${correlationId}`)
    return saveCharacterModel
  } catch(error: any) {
    logger.error(`saveCharacter mapping failed, ${error}`)
    throw error
  }
}