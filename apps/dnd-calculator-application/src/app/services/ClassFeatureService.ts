import { ClassFeatureRepository } from "../repositories/ClassFeatureRepository"
import { Logger } from "../utils/Logger";
import { CharacterClass } from "@prisma/client";
import { IClassFeature } from "./ClassService";


interface IRetrieveClassFeatures {
  className: string,
  classLevel: number,
  subclass: string | null
}

export class ClassFeatureService {
  classFeatureRepository: ClassFeatureRepository;
  logger: Logger

  constructor() {
    this.classFeatureRepository = new ClassFeatureRepository()
    this.logger = new Logger()
  }

  mapActiveFeatures(charClasses: CharacterClass[], classFeatures: IClassFeature[][], correlationId: string) {
    try {
      this.logger.info(`Commencing fetchClassFeatures within CharacterService with correlationId ${correlationId}`)
      const classNamesAndLevels: IRetrieveClassFeatures[] = charClasses.map((characterClass) => {
        return {
          className: characterClass.className,
          classLevel: characterClass.classLevel,
          subclass: characterClass.subClass
        }
      })

      const flattenFeatures = classFeatures.flat()
      const features = flattenFeatures.reduce((acc, feature) => {
        if(!acc[feature.className]) {
          acc[feature.className] = []
        }
        acc[feature.className].push(feature)
        return acc
      }, {})

      // console.log("FEATURES", inspect(features))

      const filteredFeatures = classNamesAndLevels.reduce((acc, obj) => {
        const featureArray = features[obj.className]
        if(!featureArray) {
          acc[obj.className] = []
          return acc
        }

        const mappedFeatures = featureArray.filter((feature) => {
          const isSubclassMatch = feature.subclass === null || feature.subclass === obj.subclass
          const isLevelMatch = feature.featureLevel <= obj.classLevel
          return isSubclassMatch && isLevelMatch
        })
        acc[obj.className] = mappedFeatures
        return acc
      }, {})
      return filteredFeatures

      
    } catch(err) {
      this.logger.error(`An error has occured, ${err}`)
      throw err
    }
  }
}