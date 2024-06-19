import { Class, Spell } from '@prisma/client';
import {
  IClassModel,
  IClassName,
  IClassNameLevelSubclass,
  IClassFeatureModel,
} from '../utils/interfaces';
import { Logger } from '../utils/Logger';
import { CustomError } from '../utils/CustomError';
import { spellLevelSlots } from '../utils/constants';

interface IClassLevelUpDetails {
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
):IClassLevelUpDetails[] => {
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
  spells: Spell[],
  spellCastingLevel: number
): ISpellsLevelUp => {
  // Filter out non spellcasting classes.
  if (spells.length === 0)
    return {
      newSpellSlots: [],
      availableSpells: [],
      newSpellCastingLevel: spellCastingLevel,
    };

  const newSpellCastingLevel = spellCastingLevel + 1;
  const oldSpellSlots = spellLevelSlots[spellCastingLevel];
  const newSpellSlots = spellLevelSlots[newSpellCastingLevel];

  newSpellSlots.map((spellOffset, i = 0) => {
    if (!oldSpellSlots[i]) return spellOffset;

    return spellOffset - oldSpellSlots[i];
  });

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
