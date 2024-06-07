import { Character } from "@prisma/client";
import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { Logger } from "../utils/Logger";

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

export const saveCharacterMapper = (requestBody: saveCharacterDto, logger: Logger) => {
  try {
    logger.info('Commencing saveCharacter mapping from requestBody')
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
    logger.info(`saveCharacter mapping successful`)
    return saveCharacterModel
  } catch(error: any) {
    logger.error(`saveCharacter mapping failed, ${error}`)
    throw error
  }
}

export const mapCharacterInfo = (characterInfo, logger) => {
  logger.info(`Mapping character information for character ${characterInfo.characterName} `)
  const character = {
    playerName: characterInfo.playerName,
    characterName: characterInfo.characterName,
    level: characterInfo.level,
    currentSpeed: characterInfo.currentSpeed,
    armourClass: characterInfo.armourClass,
    maxHitPoints: characterInfo.maxHitPoints,
    currentHitPoints: characterInfo.currentHitPoints,
    tempHitPoints: characterInfo.tempHitPoints,
    proficiencyBonus: characterInfo.proficiencyBonus,
    alignment: characterInfo.alignment,
    attributeArray: characterInfo.attributeArray,
    skillsArray: characterInfo.skillsArray,
  }
  return character
}


export const mapCharacterSheetInfo = (characterData: Character, infoObj, logger: Logger) => {
  logger.info(`Mapping character sheet for character ${characterData.characterName} `)
  const mappedCharacterSheet ={
    playerName: characterData.playerName,
    characterName: characterData.characterName,
    level: characterData.level,
    currentSpeed: characterData.currentSpeed,
    armourClass: characterData.armourClass,
    maxHitPoints: characterData.maxHitPoints,
    currentHitPoints: characterData.currentHitPoints,
    tempHitPoints: characterData.tempHitPoints,
    proficiencyBonus: characterData.proficiencyBonus,
    alignment: characterData.alignment,
    attributeArray: characterData.attributeArray,
    skillsArray: characterData.skillArray,
    background: infoObj.backgroundInfo,
    race: infoObj.raceInfo,
    class: infoObj.classInfo,
    activeSpells: infoObj.activeSpells
  }
  return mappedCharacterSheet
}
