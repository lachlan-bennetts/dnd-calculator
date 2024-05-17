import { CharacterClass } from "@prisma/client";
import { AttributeEnum } from "../utils/constants";
import { IAttributeObject, ISaveCharacterClass } from "../utils/interfaces";
import { convertAttrToBonusObject } from "./AttributeMapper";
import { saveCharacterDto } from "../dtos/saveCharacterDtos";

export const mapNewCharacterClass = (className: string, characterId: string, spellCastAttr: string, requestBody: saveCharacterDto): ISaveCharacterClass => {
  const characterAttributes = requestBody.attributeArray
  const attrBonusObj = convertAttrToBonusObject(characterAttributes)
  const spellSaveDC = calculateSpellSaveDC(attrBonusObj, spellCastAttr, 2)
  const proficientSkills = requestBody.chosenProficientSkills
  const newCharClass = {
    classLevel: 1,
    subClass: null,
    spellSaveDC: spellSaveDC,
    proficientSkills: proficientSkills,
    className: className,
    characterId: characterId,
  }
  return newCharClass
}

const calculateSpellSaveDC = (characterAttributeObject: IAttributeObject, spellCastAttr: string, profBonus: number) => {
  const spellSaveDC = 8 + characterAttributeObject[spellCastAttr] + profBonus
  return spellSaveDC
}