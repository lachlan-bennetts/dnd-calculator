import { Class, Spell } from '@prisma/client';
import {
  IClassModel,
  IClassName,
  IClassNameLevelSubclass,
  IClassFeatureModel,
  ISpellModel,
} from '../utils/interfaces';
import { Logger } from '../utils/Logger';
import { CustomError } from '../utils/CustomError';
import { SpellcastingClasses, spellLevelSlots } from '../utils/constants';
import { calcNewSpellSlots } from '../utils/helpers';

export interface IClassLevelUpDetails {
  className: string;
  classLevel: number;
  hitDie: number;
  classFeatures: IClassFeatureModel[];
  spellInfo: ISpellsLevelUp;
  subClassTitles?: string[];
  subclasses?: string[];
}

// TODO: Change Spell into a spell Model interface later.
interface ISpellsLevelUp {
  newSpellSlots: number[];
  availableSpells: Spell[];
  newSpellCastingLevel: number;
}

// TODO: RENAME THIS FUNCTION
export const mapClassLevelUpDetails = (
  characterClassInfo: IClassNameLevelSubclass[],
  allClasses: IClassModel[],
  spellCastingLevel: number,
  logger: Logger
): IClassLevelUpDetails[] => {
  const allClassNames: IClassName[] = allClasses.map((currentClass) => {
    return {
      className: currentClass.className,
    };
  });
  const classNamesAndLevels = mapClassNameAndNewLevel(
    characterClassInfo,
    allClassNames,
    logger
  );

  const levelUpClassInfo = allClasses.map((classObj) => {
    const foundClass = classNamesAndLevels.find(
      (className) => className.className === classObj.className
    );
    if (!foundClass)
      throw new CustomError(`Class ${classObj.className} not found`, 404);
    const levelUpSpellInfo = filterLevelUpSpells(
      classObj.spells,
      spellCastingLevel
    );
    if (foundClass.subClass) {
      const levelUpFeatures = classObj.classFeatures.filter(
        (feature) =>
          feature.featureLevel === foundClass.classLevel &&
          feature.subclass === foundClass.subClass
      );
      return {
        className: classObj.className,
        classLevel: foundClass.classLevel,
        hitDie: classObj.hitDie,
        classFeatures: levelUpFeatures,
        spellInfo: levelUpSpellInfo,
      };
    } else if (foundClass.classLevel === classObj.subClassStart) {
      const levelUpFeatures = classObj.classFeatures.filter(
        (feature) => feature.featureLevel === foundClass.classLevel
      );
      return {
        className: classObj.className,
        classLevel: foundClass.classLevel,
        hitDie: classObj.hitDie,
        classFeatures: levelUpFeatures,
        spellInfo: levelUpSpellInfo,
        subclassTitles: classObj.subClassTitles,
        subclasses: classObj.subClasses,
      };
    } else {
      const levelUpFeatures = classObj.classFeatures.filter(
        (feature) => feature.featureLevel === foundClass.classLevel
      );
      return {
        className: classObj.className,
        classLevel: foundClass.classLevel,
        hitDie: classObj.hitDie,
        classFeatures: levelUpFeatures,
        spellInfo: levelUpSpellInfo,
      };
    }
  });
  logger.info('Class, classFeature and spell mapping for level up completed');
  return levelUpClassInfo;
};

const mapClassNameAndNewLevel = (
  characterClassInfo: IClassNameLevelSubclass[],
  allClassNames: IClassName[],
  logger: Logger
): IClassNameLevelSubclass[] => {
  try {
    logger.info(`Mapping class level ups`);
    const classesInfo = allClassNames.map((currentClass) => {
      const existingClass = characterClassInfo.find(
        (characterClass) => characterClass.className === currentClass.className
      );
      if (existingClass) {
        return {
          className: existingClass.className,
          classLevel: existingClass.classLevel + 1,
        };
      } else {
        return {
          className: currentClass.className,
          classLevel: 1,
        };
      }
    });
    return classesInfo;
  } catch (err) {
    logger.error(`Error mapping class level ups`, err);
    throw err;
  }
};

// TODO: Where to put this? Change name too.
const filterLevelUpSpells = (
  spells: ISpellModel[] | undefined,
  spellCastingLevel: number
): ISpellsLevelUp => {
  // Filter out non spellcasting classes.
  if (!spells || spells.length === 0)
    return {
      newSpellSlots: [],
      availableSpells: [],
      newSpellCastingLevel: spellCastingLevel,
    };

  const newSpellSlots = calcNewSpellSlots(spellCastingLevel);

  const maxSpellLevel = newSpellSlots + 1;
  const filteredSpells = spells.filter((spell) => {
    return spell <= maxSpellLevel;
  });

  return {
    newSpellSlots: newSpellSlots,
    availableSpells: filteredSpells,
    newSpellCastingLevel: spellCastingLevel,
  };
};

export const mapInitialClassLevelUpInfo = (classes: IClassModel[]) => {
  const mappedClasses = classes.map((classObj: IClassModel) => {
    const filteredFeatures = classObj.classFeatures.filter(
      (feature) => feature.featureLevel === 1
    );
    const filteredSpells = classObj.spells.filter(
      (spell) => spell.spellLevel === 0 || spell.spellLevel === 1
    );
    if (SpellcastingClasses.includes(classObj.className)) {
      const newSpellSlots = calcNewSpellSlots(0, classObj.className);
      const mappedClassInfo = {
        className: classObj.className,
        hitDie: classObj.hitDie,
        armourProficiencies: classObj.armourProficiencies,
        weaponProficiencies: classObj.weaponProficiencies,
        primaryAttribute: classObj.primaryAttribute,
        classFeatures: filteredFeatures,
        spellInfo: {
          newSpellSlots: newSpellSlots,
          availableSpells: filteredSpells,
          newSpellCastingLevel: 1,
        },
      };
      return mappedClassInfo;
    } else {
      const mappedClassInfo = {
        className: classObj.className,
        hitDie: classObj.hitDie,
        armourProficiencies: classObj.armourProficiencies,
        weaponProficiencies: classObj.weaponProficiencies,
        primaryAttribute: classObj.primaryAttribute,
        classFeatures: filteredFeatures,
        spellInfo: {
          newSpellSlots: [],
          availableSpells: [],
          newSpellCastingLevel: 0,
        },
      };
      return mappedClassInfo;
    }
  });
  return mappedClasses;
};
