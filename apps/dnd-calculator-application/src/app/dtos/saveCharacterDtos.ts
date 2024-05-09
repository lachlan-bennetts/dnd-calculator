import { ClassEnum, RaceEnum } from '../utils/constants';

export interface saveCharacterDto {
  playerName: string;
  characterName: string;
  armourClass: number
  currentHitPoints: number;
  maxHitPoints: number;
  tempHitPoints: number;
  race: RaceEnum;
  speed: number;
  background: string;
  classLevel: number;
  class: ClassEnum;
  subClass: string;
  userId: string;
}
