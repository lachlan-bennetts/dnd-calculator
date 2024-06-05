import joi from 'joi'
import { validator } from './validator';

const postCharacterSchema = joi.object({
  playerName: joi.string().required().max(20).min(3),
  characterName: joi.string().required().max(20).min(3),
  maxHitPoints: joi.number().required(),
  speed: joi.number().required(),
  equippedArmour: joi.array().items(joi.string()),
  equippedWeapons: joi.array().items(joi.string()),
  items: joi.array().items(joi.string()),
  attributeArray: joi.array().items(joi.number().required()).length(6),
  skillsArray: joi.array().items(joi.number().required()).length(18),
  background: joi.string().required(),
  alignment: joi.string().required(),
  class: joi.string().required(),
  race: joi.string().required(),
  userId: joi.string().required(),
})

const getCharactersHeadersSchema = joi.object({
  "user-id": joi.string().required()
}).unknown(true)

const getCharacterInfoSchema = joi.object({
  "character-id": joi.string().required()
}).unknown(true)

const deleteCharacterSchema = joi.object({
  "character-id": joi.string().required(),
  "user-id": joi.string().required()
}).unknown(true)

const addClassSchema = joi.object({
  class: joi.string().required(),
  subClass: joi.string(),
  classLevel: joi.number().required(),
})

export const postReqCreateCharacter = validator(postCharacterSchema)
export const getReqCharacters = validator(getCharactersHeadersSchema)
export const getReqCharacterInfo= validator(getCharacterInfoSchema)
export const deleteReqCharacter = validator(deleteCharacterSchema)