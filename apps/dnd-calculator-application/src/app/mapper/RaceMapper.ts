import { Race } from '@prisma/client';
import { ICharacterRaceInfo } from '../services/RaceService';
import { IRaceFeatureModel } from '../utils/interfaces';

export const mapCharacterRaceInfo = (
  raceData: Race,
  activeRaceFeatures: any
): ICharacterRaceInfo => {
  const raceProperties = {
    raceName: raceData.parentRace,
    subRace: raceData.subRace,
    darkVision: raceData.darkVision,

    walkingSpeed: raceData.walkingSpeed,
    flyingSpeed: raceData.flyingSpeed,
    size: raceData.size,
    raceFeatures: activeRaceFeatures,
  };
  const raceProficiencies = {
    armour: raceData.armourProficiencies,
    weapon: raceData.weaponProficiencies,
    tool: raceData.toolProficiencies,
    skills: raceData.skillProficiencies,
    damageResist: raceData.damageTypeResistance,
    damageAdvantage: raceData.damageTypeAdvantageThrows,
    condtionAdvantage: raceData.conditionAdvantageThrows,
  };
  const raceInfo = {
    raceProperties,
    raceProficiencies,
  };
  return raceInfo;
};

export const mapRaceLevelUp = (
  raceData: Race,
  raceFeatures: IRaceFeatureModel[]
) => {
  const raceInfo = {
    parentRace: raceData.parentRace,
    subRace: raceData.subRace,
    maxHealthMod: raceData.MaxHealthModifier,
    levelUpRaceFeatures: raceFeatures,
  };
  return raceInfo;
};
