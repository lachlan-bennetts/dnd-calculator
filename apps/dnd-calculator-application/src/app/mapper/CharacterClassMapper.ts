import { IAttributeObject, ISaveCharacterClass } from "../utils/interfaces";
import { convertAttrToBonusObject } from "./AttributeMapper";
import { saveCharacterDto } from "../dtos/saveCharacterDtos";
import { AttributeEnum, bardSpellCapacity, sorcererSpellCapacity, warlockSpellCapacity } from "../utils/constants";

export const mapNewCharacterClass = (className: string, characterId: string, spellCastAttr: AttributeEnum | null, requestBody: saveCharacterDto): ISaveCharacterClass => {

  const characterAttributes = requestBody.attributeArray
  const attributeBonuses = convertAttrToBonusObject(characterAttributes)
  const spellSaveDC = calculateSpellSaveDC(attributeBonuses, spellCastAttr, 2)
  const spellCapacity = calculateSpellCapacity(className, 1, attributeBonuses, spellCastAttr)
  const proficientSkills = requestBody.chosenProficientSkills
  const newCharClass = {
    classLevel: 1,
    subClass: '',
    spellSaveDC: spellSaveDC,
    spellCapacity: spellCapacity,
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

const calculateSpellCapacity = (className: string, classLevel: number, characterAttributeObject: IAttributeObject, spellCastAttr: AttributeEnum | null) => {
  if(spellCastAttr === null) return 0
  const dynamicClasses = ['Wizard', 'Cleric', 'Druid']
  if(dynamicClasses.includes(className)) {
    const spellCap = classLevel + characterAttributeObject[spellCastAttr]
    console.log(spellCap)
    return spellCap
  } else if(className === 'Sorcerer') {
    return sorcererSpellCapacity[classLevel - 1]
  } else if(className === 'Bard') {
    return bardSpellCapacity[classLevel - 1]
  } else {
    return warlockSpellCapacity[classLevel - 1]
  }
}