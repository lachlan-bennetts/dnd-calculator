import { mapCharacterRaceInfo, mapRaceLevelUp } from '../mapper/RaceMapper';
import { RaceRepository } from '../repositories/RaceRepository';
import { Logger } from '../utils/Logger';

export interface ICharacterRaceInfo {
  raceProperties: {
    raceName: string;
    subRace: string;
    darkVision: number;
    walkingSpeed: number;
    flyingSpeed: number;
    size: string;
    raceFeatures: any;
  };
  raceProficiencies: {
    armour: string[];
    weapon: string[];
    tool: string[];
    skills: string[];
    damageResist: string[];
    damageAdvantage: string[];
    condtionAdvantage: string[];
  };
}

export class RaceService {
  private raceRepository: RaceRepository;
  private logger: Logger;

  constructor(inheritLogger: Logger) {
    (this.logger = inheritLogger), (this.raceRepository = new RaceRepository());
  }

  async retrieveCharacterRaceAndFeatures(subraceName: string) {
    try {
      this.logger.info(`Retrieving raceData from raceName ${subraceName} `);
      const raceData = await this.raceRepository.retrieveRaceAndFeatures(
        subraceName,
        this.logger
      );
      if (!raceData) {
        this.logger.error(`No raceData found for subraceName ${subraceName} `);
        throw new Error(`No raceData found for subraceName ${subraceName} `);
      }
      return raceData;
    } catch (err) {
      this.logger.error(
        `Error retrieving raceData from raceName ${subraceName} `
      );
      throw err;
    }
  }

  async collectRelevantRaceData(
    subraceName: string,
    characterLvl: number
  ): Promise<ICharacterRaceInfo> {
    try {
      const raceData = await this.retrieveCharacterRaceAndFeatures(subraceName);

      const activeFeatures = raceData.features.filter(
        (feature) => feature.featureLevel <= characterLvl
      );
      const mappedRaceData = mapCharacterRaceInfo(raceData, activeFeatures);
      return mappedRaceData;
    } catch (err) {
      this.logger.error(`Error collecting relevant raceData `);
      throw err;
    }
  }

  async collectLevelUpRaceInfo(subraceName: string, NewCharacterLvl: number) {
    try {
      this.logger.info(
        `Collecting relevant race information for character level up to level ${NewCharacterLvl}`
      );
      const raceData = await this.retrieveCharacterRaceAndFeatures(subraceName);

      const raceFeaturesOnLevelUp = raceData.features.filter((feature) => {
        feature.featureLevel === NewCharacterLvl;
      });

      const levelUpRaceData = mapRaceLevelUp(raceData, raceFeaturesOnLevelUp);
      return levelUpRaceData;
    } catch (err) {
      this.logger.error('Error occured in collectLevelUpRaceInfo', err);
      throw err;
    }
  }
}
