import { Race } from '@prisma/client';
import { ICharacterRaceInfo } from '../services/RaceService';
import { IRaceFeatureModel, IRaceModel } from '../utils/interfaces';
import { Logger } from '../utils/Logger';
import { CreatureTypeEnum } from '../utils/constants';

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

export const mapInitialRaceData = (raceData: IRaceModel[], logger: Logger) => {
  try {
    const mappedRaceArr = raceData.map((raceObj) => {
      const raceFeatures = raceObj.features.map((feature) => {
        return {
          featureId: feature.raceFeatureId,
          featureName: feature.featureName,
          featureDescription: feature.featureDescription,
          featureLevel: feature.featureLevel,
        };
      });
      const raceProfs = {
        armourProficiencies: raceObj.armourProficiencies,
        weaponProficiencies: raceObj.weaponProficiencies,
        toolProficiencies: raceObj.toolProficiencies,
        skillProficiencies: raceObj.skillProficiencies,
      };
      const raceResistances = {
        damageTypeResistance: raceObj.damageTypeResistance,
        damageTypeAdvantageThrows: raceObj.damageTypeAdvantageThrows,
        conditionAdvantageThrows: raceObj.conditionAdvantageThrows,
      };
      const mappedRace = {
        parentRace: raceObj.parentRace,
        subRace: raceObj.subRace,
        briefDesc: raceObj.briefDescription,
        creatureTypeEnum: raceObj.creatureType as CreatureTypeEnum,
        darkVision: raceObj.darkVision,
        walkingSpeed: raceObj.walkingSpeed,
        flyingSpeed: raceObj.flyingSpeed,
        size: raceObj.size,
        languages: raceObj.languages,
        maxHealthModifier: raceObj.MaxHealthModifier,
        cantripSlotModifier: raceObj.cantripSlotModifier,
        statPoolInc: raceObj.statPoolIncrease,
        statPoolMod: raceObj.statPoolModifier,
        languageSlotModifier: raceObj.languageSlotModifier,
        damageTypeResistance: raceObj.damageTypeResistance,
        resistances: raceResistances,
        proficiencies: raceProfs,
        features: raceFeatures,
      };
      return mappedRace;
    });
    return mappedRaceArr;
  } catch (err) {
    logger.error(`Error mapping initialRaceInfo`, err);
    throw err;
  }
};
