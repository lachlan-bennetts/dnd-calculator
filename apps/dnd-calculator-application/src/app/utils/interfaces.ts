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