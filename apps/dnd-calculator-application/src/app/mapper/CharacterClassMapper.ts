import {
  IAttributeObject,
  ICharacterClassModel,
  IClassNameLevelSubclass,
  ISaveCharacterClass,
} from '../utils/interfaces';
import { convertAttrToBonusObject } from './AttributeMapper';
import { saveCharacterDto } from '../dtos/saveCharacterDtos';
import { AttributeEnum } from '../utils/constants';

export const mapNewCharacterClass = (
  className: string,
  characterId: string,
  spellCastAttr: AttributeEnum | null,
  requestBody: saveCharacterDto
): ISaveCharacterClass => {
  const characterAttributes = requestBody.attributeArray;
  const attributeBonuses = convertAttrToBonusObject(characterAttributes);
  const spellSaveDC = calculateSpellSaveDC(attributeBonuses, spellCastAttr, 2);
  const spellCapacity = calculateSpellCapacity(
    className,
    1,
    attributeBonuses,
    spellCastAttr
  );
  const proficientSkills = requestBody.chosenProficientSkills;
  const newCharClass = {
    classLevel: 1,
    subClass: '',
    spellSaveDC: spellSaveDC,
    spellCapacity: spellCapacity,
    proficientSkills: proficientSkills,
    className: className,
    characterId: characterId,
  };
  return newCharClass;
};

const calculateSpellSaveDC = (
  characterAttributeObject: IAttributeObject,
  spellCastAttr: AttributeEnum | null,
  profBonus: number
) => {
  if (!spellCastAttr) {
    return 0;
  }
  const spellSaveDC = 8 + characterAttributeObject[spellCastAttr] + profBonus;
  return spellSaveDC;
};

export const mapClassNameAndLevel = (
  characterClasses: ICharacterClassModel[]
): IClassNameLevelSubclass[] => {
  const classNameAndLevels = characterClasses.map((characterClass) => {
    if (characterClass.subClass) {
      return {
        className: characterClass.className,
        classLevel: characterClass.classLevel,
        subclass: characterClass.subClass,
      };
    } else {
      return {
        className: characterClass.className,
        classLevel: characterClass.classLevel,
      };
    }
  });
  return classNameAndLevels;
};
