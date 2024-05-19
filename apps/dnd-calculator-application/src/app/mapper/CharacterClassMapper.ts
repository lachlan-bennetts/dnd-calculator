import { IAttributeObject, ISaveCharacterClass } from "../utils/interfaces";
import { convertAttrToBonusObject } from "./AttributeMapper";
import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { AttributeEnum } from "../utils/constants";

export const mapNewCharacterClass = (className: string, characterId: string, spellCastAttr: AttributeEnum | null, requestBody: saveCharacterDto): ISaveCharacterClass => {
  const characterAttributes = requestBody.attributeArray
  const attrBonusObj = convertAttrToBonusObject(characterAttributes)
  console.log('attrBonusObj', attrBonusObj)
  const spellSaveDC = calculateSpellSaveDC(attrBonusObj, spellCastAttr, 2)
  console.log('spellSaveDC', spellSaveDC)
  const proficientSkills = requestBody.chosenProficientSkills
  const newCharClass = {
    classLevel: 1,
    subClass: '',
    spellSaveDC: spellSaveDC,
    proficientSkills: proficientSkills,
    className: className,
    characterId: characterId,
  }
  return newCharClass
}

const calculateSpellSaveDC = (characterAttributeObject: IAttributeObject, spellCastAttr: AttributeEnum | null, profBonus: number) => {
  if(!spellCastAttr) {
    return 0
  }
  const spellSaveDC = 8 + characterAttributeObject[spellCastAttr] + profBonus
  return spellSaveDC
}