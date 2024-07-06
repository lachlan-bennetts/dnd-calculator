import { Logger } from '../utils/Logger';

export interface IBackground {
  backgroundName: string;
  backgroundDescription: string;
  skillProficiencies: string[];
  toolProficiencies: string[];
  toolTypeProficiencies: string[];
  equipment: string[];
  backgroundFeatureTitle: string;
  backgroundFeatureDescription: string;
  suggestedCharacteristics: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICharacterBackground {
  backgroundInfo: {
    backgroundName: string;
    backgroundDescription: string;
  };
  backgroundProfs: {
    backgroundSkills: string[];
    toolProficiencies: string[];
    toolTypeProficiencies: string[];
  };
}

export const mapCharacterBackgroundInfo = (
  background: IBackground,
  logger: Logger
): ICharacterBackground => {
  logger.info(`Mapping background info `);
  const backgroundInfo = {
    backgroundName: background.backgroundName,
    backgroundDescription: background.backgroundDescription,
  };
  const backgroundProfs = {
    backgroundSkills: background.skillProficiencies,
    toolProficiencies: background.toolProficiencies,
    toolTypeProficiencies: background.toolTypeProficiencies,
  };
  return {
    backgroundInfo,
    backgroundProfs,
  };
};

export const mapInitialBackgroundData = (
  backgroundData: IBackground[],
  logger: Logger
) => {
  logger.info(`Mapping initial background data`);
  const mappedBackgroundData = backgroundData.map((background) => {
    const backgroundInfo = {
      backgroundName: background.backgroundName,
      backgroundDescription: background.backgroundDescription,
    };
    const backgroundProfs = {
      backgroundSkills: background.skillProficiencies,
      toolProficiencies: background.toolProficiencies,
      toolTypeProficiencies: background.toolTypeProficiencies,
    };
    const backgroundFeatures = {
      backgroundFeatureTitle: background.backgroundFeatureTitle,
      backgroundFeatureDescription: background.backgroundFeatureDescription,
      suggestedCharacteristics: background.suggestedCharacteristics,
    };
    return {
      backgroundInfo,
      backgroundProfs,
      backgroundFeatures,
    };
  });
  return mappedBackgroundData;
};
