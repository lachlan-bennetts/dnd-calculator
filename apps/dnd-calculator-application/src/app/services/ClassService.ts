import { CharacterClass } from '@prisma/client';
import { ClassRepository } from '../repositories/ClassRepository';
import { Logger } from '../utils/Logger';
import { CustomError } from '../utils/CustomError';
import { ClassFeatureService } from './ClassFeatureService';
import {
  IClassModel,
  IClassName,
  IClassNameLevelSubclass,
} from '../utils/interfaces';
import {
  mapClassLevelUpDetails,
  mapInitialClassLevelUpInfo,
} from '../mapper/ClassMapper';

export interface IClassFeature {
  classFeatureId: string;
  featureName: string;
  featureDescription: string;
  className: string;
  subclass: string | null;
  featureLevel: number;
}

export class ClassService {
  private classFeatureService: ClassFeatureService;
  private classRepository: ClassRepository;
  private logger: Logger;

  constructor(inheritLogger: Logger) {
    this.logger = inheritLogger;
    this.classFeatureService = new ClassFeatureService();
    this.classRepository = new ClassRepository();
  }

  async retrieveClassInfo(
    classNames: string[],
    characterClasses: CharacterClass[]
  ) {
    const classesAndFeats = await this.classRepository.retrieveClassesByNames(
      classNames,
      this.logger
    );
    if (!classesAndFeats || classesAndFeats.length === 0) {
      this.logger.error(`Classes do not exist `);
      throw new CustomError('Classes do not exist', 404);
    }

    const allClassFeatures: IClassFeature[][] = classesAndFeats.map(
      (classObj) => {
        return classObj.classFeatures;
      }
    );
    const activeClassFeatures = this.classFeatureService.mapActiveFeatures(
      characterClasses,
      allClassFeatures
    );

    const mappedResults = classesAndFeats.map((classEnt) => {
      const mappedClass = {
        className: classEnt.className,
        weaponProficiencies: classEnt.weaponProficiencies,
        armourProficiencies: classEnt.armourProficiencies,
        primaryAttribute: classEnt.primaryAttribute,
        spellCastingAttribute: classEnt.spellCastingAttribute,
        activeClassFeatures: activeClassFeatures[classEnt.className],
      };
      return mappedClass;
    });
    return mappedResults;
  }

  async findClass(className: string) {
    const retrievedClass = await this.classRepository.findClassByName(
      className
    );
    if (!retrievedClass) {
      this.logger.error(`Class ${className} does not exist`);
      throw new CustomError('Class does not exist', 404);
    }
    return retrievedClass;
  }

  async retrieveClassLevelUpInfo(
    characterClassInfo: IClassNameLevelSubclass[],
    spellCastingLevel: number
  ) {
    // Retrieve level up info...
    const allClasses: IClassModel[] =
      await this.classRepository.retrieveAllClasses(this.logger);

    const levelUpClassInfo = mapClassLevelUpDetails(
      characterClassInfo,
      allClasses,
      spellCastingLevel,
      this.logger
    );

    // TODO: Will have to place effects on certain classFeatures,
    // For example if a class feature allows for the spell darkness to be learned
    // without impacting spell capacity, how does that look?
    return levelUpClassInfo;
  }

  async retrieveInitialClassInfo() {
    try {
      const allClasses: IClassModel[] =
        await this.classRepository.retrieveAllClasses(this.logger);

      const initialClassFeaturesAndSpells = mapInitialClassLevelUpInfo(
        allClasses,
        this.logger
      );
      return initialClassFeaturesAndSpells;
    } catch (err) {
      this.logger.error('Error retrieving initial class info', err);
      throw err;
    }
  }
}
