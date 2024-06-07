import { CharacterClass } from "@prisma/client";
import { ClassRepository } from "../repositories/ClassRepository";
import { Logger } from "../utils/Logger";
import { CustomError } from "../utils/CustomError";
import { ClassFeatureService } from "./ClassFeatureService";
import { ClassEnum } from "../utils/constants";

export interface IClassFeature {
  classFeatureId: string,
  featureName: string,
  featureDescription: string,
  className: string,
  subclass: string | null,
  featureLevel: number,
  createdAt: Date,
  updatedAt: Date
}

export class ClassService {
  private classFeatureService: ClassFeatureService
  private classRepository: ClassRepository
  private logger: Logger

  constructor(inheritLogger: Logger) {
    this.logger = inheritLogger
    this.classFeatureService = new ClassFeatureService()
    this.classRepository = new ClassRepository()
  }

  async retrieveClassInfo(classNames: string[], characterClasses: CharacterClass[]) {
    const classesAndFeats = await this.classRepository.retrieveClassesByNames(classNames, this.logger)
    if(!classesAndFeats || classesAndFeats.length === 0) {
      this.logger.error(`Classes do not exist `)
      throw new CustomError("Classes do not exist", 404)
    }

    const allClassFeatures: IClassFeature[][] = classesAndFeats.map((classObj) => {
      return classObj.classFeatures
    })
    console.log("ALL CLASS FEATS", allClassFeatures)
    const activeClassFeatures = this.classFeatureService.mapActiveFeatures(characterClasses, allClassFeatures)
    console.log("ACTIVE CLASS FEATS", activeClassFeatures)

    const mappedResults = classesAndFeats.map((classEnt) => {
      const mappedClass =  {
        className: classEnt.className,
        weaponProficiencies: classEnt.weaponProficiencies,
        armourProficiencies: classEnt.armourProficiencies,
        primaryAttribute: classEnt.primaryAttribute,
        spellCastingAttribute: classEnt.spellCastingAttribute,
        activeClassFeatures: activeClassFeatures[classEnt.className]
      }
      return mappedClass
    })
    return mappedResults
  }

  async findClass(className: string) {
    const retrievedClass = await this.classRepository.findClassByName(className)
    if(!retrievedClass) {
      this.logger.error(`Class ${className} does not exist`)
      throw new CustomError("Class does not exist", 404)
    }
    return retrievedClass
  }
}