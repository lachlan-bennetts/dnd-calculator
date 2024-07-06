export interface ISaveUser {
  username: string;
  password: string;
  email: string;
}

export interface ISaveCharacterClass {
  classLevel: number;
  className: string;
  spellSaveDC: number;
  spellCapacity: number;
  proficientSkills: string[];
  subClass?: string;
  characterId: string;
}

export interface IAttributeObject {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
}

export interface IClassNameLevelSubclass {
  className: string;
  classLevel: number;
  subClass?: string;
}

export interface IClassName {
  className: string;
}

/* ------ Model Interfaces ---------- */

interface IBackgroundModel {
  backgroundName: string;
  backgroundDescription: string;
  skillProficiencies: string[];
  toolProficiencies: string[];
  toolTypeProficiencies: string[];
  languageSlotModifier: number;
  equipment: string[];
  backgroundFeatureTitle: string;
  backgroundFeatureDescription: string;
  suggestedCharacteristics: string[];
  // Assuming Character is defined elsewhere
  Character?: ICharacterModel[];
}

export interface ICharacterModel {
  characterId: string;
  playerName: string;
  characterName: string;
  level: number;
  armourClass: number;
  currentHitPoints: number;
  maxHitPoints: number;
  tempHitPoints: number;
  currentSpeed: number;
  proficiencyBonus: number;
  alignment: string;
  spellCastingLevel: number;
  spellSlots: number[];
  backgroundName: string;
  subRace: string;
  userId: string;
  attributeArray: number[];
  skillArray: number[];
  // Assuming Background, HeldItem, Race, User, and CharacterClass are defined elsewhere
  background?: IBackgroundModel;
  inventory?: IHeldItemModel[];
  race?: IRaceModel;
  user?: IUserModel;
  characterClasses?: ICharacterClassModel[];
}

export interface ICharacterClassModel {
  characterClassId: string;
  characterId: string;
  className: string;
  spellSaveDC: number;
  spellCapacity: number;
  ProficientSkills: string[];
  subClass?: string | null;
  classLevel: number;
  createdAt: Date;
  updatedAt: Date;
  character?: ICharacterModel;
  class?: IClassModel;
  characterSpells?: ICharacterSpellModel[];
}

interface ICharacterSpellModel {
  characterClassId: string;
  spellName: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  characterClass?: ICharacterClassModel;
  spell?: ISpellModel;
}

export interface IClassModel {
  className: string;
  hitDie: number;
  weaponProficiencies: string[];
  armourProficiencies: string[];
  availableToolProficencies: string[];
  spells: ISpellModel[];
  classFeatures: IClassFeatureModel[];
  availableSkillProficiencies: string[];
  startingEquipment: string[];
  primaryAttribute: string;
  spellCastingAttribute?: string | null;
  savingThrowProficiencies: string[];
  recommendedStandardArray: number[];
  subClassStart: number;
  subClassTitles: string[];
  subClasses: string[];
}

export interface IClassFeatureModel {
  classFeatureId: string;
  featureName: string;
  featureDescription: string;
  subclass?: string | null;
  featureLevel: number;
  Class?: IClassModel;
  className: string;
}

interface IHeldItemModel {
  heldItemId: string;
  characterId: string;
  itemId: string;
  quantity: number;
  isEquipped: boolean;
  equipmentType: string[];
  character?: ICharacterModel;
  item?: IItemModel;
}

interface IItemModel {
  itemId: string;
  name: string;
  version: string;
  description: string;
  rarity: string;
  itemType: string;
  consumableType?: string | null;
  toolType?: string | null;
  armourType?: string | null;
  weaponType?: string | null;
  attributeModifier: number[];
  skillModifier: number[];
  hasCharges: boolean;
  charges: number;
  requiresAttunement: boolean;
  offHandEquip: boolean;
  damageType: string;
  damageDieType: number;
  damageDieNumber: number;
  damageBonus: number;
  createdAt: Date;
  updatedAt: Date;
  heldItem?: IHeldItemModel[];
}

export interface ISpellModel {
  spellName: string;
  spellLevel: number;
  spellDescription: string;
  school: string;
  enhancement: string;
  actionCastingTime: number;
  bonusActionCasting: boolean;
  selfCasting: boolean;
  touchCasting: boolean;
  range: number;
  areaOfEffectType: string;
  areaOfEffect: number[];
  components: string[];
  roundDuration: number;
  concentration: boolean;
  ritual: boolean;
  targetType: string;
  targetNumber: number;
  sightRequired: boolean;
  spellType: string;
  conditionType: string;
  damageType: string;
  effectType: string;
  dieType: number;
  dieNumber: number;
  spellSave: string;
  saveRes: string;
  tags: string[];
  monsters?: string[];
  classes?: IClassModel[];
  characterSpells?: string[];
}

export interface IRaceModel {
  subRace: string;
  parentRace: string;
  briefDescription: string;
  creatureType: string;
  darkVision: number;
  statPoolModifier: number[];
  statPoolIncrease: number;
  damageTypeResistance: string[];
  damageTypeAdvantageThrows: string[];
  conditionAdvantageThrows: string[];
  MaxHealthModifier: number;
  cantripSlotModifier: number;
  languageSlotModifier: number;
  walkingSpeed: number;
  flyingSpeed: number;
  swimmingSpeed: number;
  climbingSpeed: number;
  size: string;
  effects: string[];
  weaponProficiencies: string[];
  armourProficiencies: string[];
  toolProficiencies: string[];
  skillProficiencies: string[];
  languages: string[];
  features: IRaceFeatureModel[];
  character?: ICharacterModel[];
}

export interface IRaceFeatureModel {
  raceFeatureId: string;
  featureName: string;
  featureDescription: string;
  featureLevel: number;
  race?: IRaceModel[];
  subRace: string;
}

interface IUserModel {
  userId: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  characters?: ICharacterModel[];
}
