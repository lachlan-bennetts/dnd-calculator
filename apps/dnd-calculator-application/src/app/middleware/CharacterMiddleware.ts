import joi from 'joi'
import { validator } from './validator';

const validRaceNames = [
  'Dwarf',
  'Elf',
  'Halfling',
  'Human',
  'Dragonborn',
  'Gnome',
  'Half-Elf',
  'Half-Orc',
  'Tiefling'
]

const validClassNames = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard'
]

const backgroundNames = [
  'Acolyte',
  'Charlatan',
  'Criminal',
  'Entertainer',
  'Folk Hero',
  'Guild Artisan',
  'Hermit',
  'Noble',
  'Outlander',
  'Sage',
  'Sailor',
  'Soldier',
  'Urchin'
]

const alignmentNames = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
]

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
  background: joi.string().required().valid(...backgroundNames),
  alignment: joi.string().required().valid(...alignmentNames),
  class: joi.string().required().valid(...validClassNames),
  race: joi.string().required().valid(...validRaceNames),
  userId: joi.string().required(),
})

const characterClassesSchema = joi.object({
  class: joi.string().required(),
  subClass: joi.string,
  classLevel: joi.number().required(),
})

const getCharacterLevelUpSchema = joi.object({
  "character-id": joi.string().required(),
  "user-id": joi.string().required(),
}).unknown(true)


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
export const getReqLevelUpCharacter = validator(getCharacterLevelUpSchema)
export const deleteReqCharacter = validator(deleteCharacterSchema)