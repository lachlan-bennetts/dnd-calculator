import { AttributeEnum } from "../utils/constants"
import { IAttributeObject } from "../utils/interfaces"


export const attributesIntoObject = (attributeArray: number[]): IAttributeObject => {
  const attributeMap = {
    [AttributeEnum.STRENGTH]: attributeArray[0],
    [AttributeEnum.DEXTERITY]: attributeArray[1],
    [AttributeEnum.CONSTITUTION]: attributeArray[2],
    [AttributeEnum.INTELLIGENCE]: attributeArray[3],
    [AttributeEnum.WISDOM]: attributeArray[4],
    [AttributeEnum.CHARISMA]: attributeArray[5],
  }
  return attributeMap
}

export const objectIntoAttributes = (attributeObject: object) => {
  const attributeArray = Object.values(attributeObject)
  return attributeArray
}

export const convertAttrToBonusObject = (attributeArray: number[]) => {
  const attributeBonusArr = attributeArray.map((attribute) => {
    return Math.floor((attribute - 10) / 2)
  })
  return attributesIntoObject(attributeBonusArr)
}
