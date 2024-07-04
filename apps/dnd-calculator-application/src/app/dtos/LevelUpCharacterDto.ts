// TODO: Add request GETLevelUpReq DTO

import { IClassLevelUpDetails } from '../mapper/ClassMapper';
import { IRaceLevelUpRes } from '../services/RaceService';

export interface IGetCharacterLevelUpRes {
  characterName: string;
  newCharacterLvl: number;
  alignment: string;
  background: string;
  race: IRaceLevelUpRes;
  classes: IClassLevelUpDetails[];
}
