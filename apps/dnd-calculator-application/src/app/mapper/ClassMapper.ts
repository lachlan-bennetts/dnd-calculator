import { Class } from "@prisma/client";
import { IClassModel, IClassName, IClassNameLevelSubclass } from "../utils/interfaces";
import { Logger } from "../utils/Logger";
import { CustomError } from "../utils/CustomError";


// TODO: RENAME THIS FUNCTION
export const mapClassLevelUpDetails = (characterClassInfo: IClassNameLevelSubclass[], allClasses: IClassModel[], logger: Logger) => {
  const allClassNames: IClassName[] = allClasses.map((currentClass) => {
    return {
      className: currentClass.className
    };
  })
  const classNamesAndLevels = mapClassNameAndNewLevel(characterClassInfo, allClassNames, logger);

  const classObject = allClasses.map((classObj) => {
    const foundClass = classNamesAndLevels.find((className) => className.className === classObj.className);
    if (!foundClass) throw new CustomError(`Class ${classObj.className} not found`, 404);
    if (foundClass.subClass) {
      const levelUpFeatures = classObj.classFeatures?.filter((feature) => feature.featureLevel === foundClass.classLevel  && feature.subclass === foundClass.subClass);
  
      return {
        className: classObj.className,
        classLevel: foundClass.classLevel,
        hitDie: classObj.hitDie,
        spells: classObj.spells,
        classFeatures: levelUpFeatures,
        subClassStart: classObj.subClassStart
      }
    } else {
      const levelUpFeatures = classObj.classFeatures?.filter((feature) => feature.featureLevel === foundClass.classLevel);
      return {
        className: classObj.className,
        classLevel: foundClass.classLevel,
        hitDie: classObj.hitDie,
        spells: classObj.spells,
        classFeatures: levelUpFeatures,
        subClassStart: classObj.subClassStart
      }
    }
  })
}


const mapClassNameAndNewLevel = (characterClassInfo: IClassNameLevelSubclass[], allClassNames: IClassName[], logger: Logger): IClassNameLevelSubclass[] => {
  try {
    logger.info(`Mapping class level ups`)
    const classesInfo = allClassNames.map((currentClass) => {

      const existingClass = characterClassInfo.find((characterClass) => characterClass.className === currentClass.className);
      if (existingClass) {
        return {
          className: existingClass.className,
          classLevel: existingClass.classLevel + 1
        };
      } else {
        return {
          className: currentClass.className,
          classLevel: 1
        };
      }
    });
    return classesInfo;
  } catch (err) {
    logger.error(`Error mapping class level ups`, err);
    throw err;
  }
}

// TODO: Implement these.
// Filter spells by class level
// spellCasting Level
// spellCapacity increase?
// subClassStart