import joi from 'joi'
import { validator } from './validator';

const postCharacterSchema = joi.object({
  playerName: joi.string().required().max(20).min(3),
  characterName: joi.string().required().max(20).min(3),
  armourClass: joi.number().required(),
  currentHitPoints: joi.number().required(),
  maxHitPoints: joi.number().required(),
  tempHitPoints: joi.number().required(),
  speed: joi.number().required(),
  background: joi.string().required(),
  class: joi.string().required(),
  subClass: joi.string(),
  classLevel: joi.number().required(),
  race: joi.string().required(),
  userId: joi.string().required().uuid(),
})

const addClassSchema = joi.object({
  class: joi.string().required(),
  subClass: joi.string(),
  classLevel: joi.number().required(),
})

const postAttrSchema = joi.object({
  str: joi.number().required(),
  dex: joi.number().required(),
  con: joi.number().required(),
  int: joi.number().required(),
  wis: joi.number().required(),
  cha: joi.number().required(),
})

const postSkillsSchema = joi.object({
  acro: joi.number().required(),
  anim: joi.number().required(),
  arca: joi.number().required(),
  ath: joi.number().required(),
  dec: joi.number().required(),
  his: joi.number().required(),
  ins: joi.number().required(),
  inti: joi.number().required(),
  inv: joi.number().required(),
  med: joi.number().required(),
  nat: joi.number().required(),
  perc: joi.number().required(),
  perf: joi.number().required(),
  pers: joi.number().required(),
  rel: joi.number().required(),
  slei: joi.number().required(),
  stealth: joi.number().required(),
  surv: joi.number().required(),
})

export const postReqCreateCharacter = validator(postCharacterSchema)