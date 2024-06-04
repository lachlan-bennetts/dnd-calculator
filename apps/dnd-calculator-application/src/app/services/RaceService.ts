import { mapCharacterRaceInfo } from "../mapper/RaceMapper";
import { RaceRepository } from "../repositories/RaceRepository";
import { Logger } from "../utils/Logger";

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
  }
}

export class RaceService {
  private raceRepository: RaceRepository
  private logger: Logger

  constructor() {
    this.raceRepository = new RaceRepository(),
    this.logger = new Logger()
  }
  
  async retrieveCharacterRaceAndFeatures(raceName: string, correlationId: string) {
    try {
      this.logger.info(`Retrieving raceData from raceName ${raceName} with correlationId ${correlationId}`)
      const raceData = await this.raceRepository.retrieveRaceAndFeatures(raceName, this.logger, correlationId)
      return raceData
    } catch(err) {
      this.logger.error(`Error retrieving raceData from raceName ${raceName} with correlationId ${correlationId}`)
      throw err
    }
  }


  async collectRelevantRaceData(subraceName: string, characterLvl: number, correlationId: string): Promise<ICharacterRaceInfo> {
    try {
      const raceData = await this.retrieveCharacterRaceAndFeatures(subraceName, correlationId)
      if(!raceData) {
        this.logger.error(`No raceData found for subraceName ${subraceName} with correlationId ${correlationId}`)
        throw new Error(`No raceData found for subraceName ${subraceName} with correlationId ${correlationId}`)
      }
      const activeFeatures = raceData.features.filter((feature) => feature.level <= characterLvl)
      const mappedRaceData = mapCharacterRaceInfo(raceData, activeFeatures)
      return mappedRaceData
    } catch(err) {
      this.logger.error(`Error collecting relevant raceData with correlationId ${correlationId}`)
      throw err
    }
  }
}