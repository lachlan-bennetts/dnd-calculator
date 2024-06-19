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

export interface IClassModel {
  className: string;
  hitDie: number;
  weaponProficiencies: string[];
  armourProficiencies: string[];
  availableToolProficencies: string[];
  spells: Spell[];
  classFeatures: IClassFeatureModel[];
  availableSkillProficiencies: string[];
  startingEquipment: string[];
  primaryAttribute: string;
  spellCastingAttribute?: string | null;
  savingThrowProficiencies: string[];
  recommendedStandardArray: number[];
  subClassStart: number;
  subClassTitles: string[];
  subClasses: string[]
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

export interface Spell {
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