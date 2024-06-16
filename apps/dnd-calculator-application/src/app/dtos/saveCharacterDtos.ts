import { ClassEnum, RaceEnum, BackgroundEnum, SkillEnum } from '../utils/constants';

export interface saveCharacterDto {
  playerName: string;
  characterName: string;
  maxHitPoints: number;
  speed: number;
  items: string[];
  equippedArmour: string[]; // TODO: Implement later
  equippedWeapons: string[]; // TODO: Implement later
  class: ClassEnum;
  alignment: string;
  attributeArray: number[];
  skillsArray: number[];
  chosenProficientSkills: SkillEnum[];
  race: RaceEnum;
  background: BackgroundEnum;
  userId: string;
}
