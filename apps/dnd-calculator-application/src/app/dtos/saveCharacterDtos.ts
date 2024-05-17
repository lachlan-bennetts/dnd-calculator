import { ClassEnum, RaceEnum, BackgroundEnum, SkillEnum } from '../utils/constants';

export interface saveCharacterDto {
  playerName: string;
  characterName: string;
  maxHitPoints: number;
  items: string[];
  equippedArmour: string[];
  equippedWeapon: string[];
  class: ClassEnum;
  alignment: string;
  attributeArray: number[];
  skillsArray: number[];
  chosenProficientSkills: SkillEnum[];
  speed: number;
  race: RaceEnum;
  background: BackgroundEnum;
  userId: string;
}
