import { PrismaClient } from "@prisma/client";
import { cantripSeed } from "./seedData/spellData/cantripData";
import { classSeedData } from "./seedData/classData";
import { raceDataSeed } from "./seedData/raceData";
import { backgroundsSeedData } from "./seedData/backgroundData";
import { classFeaturesSeed } from "./seedData/classFeatureData";
import { raceFeaturesData } from "./seedData/raceFeaturesData";
import { Logger } from '../src/app/utils/logger';

const prisma = new PrismaClient();
const logger = new Logger()

async function main() {
  // Remove with introduction of FE.
  const seededUser = await prisma.user.upsert({
    where: {
      email: 'lachlan@gmail.com'
    },
    update: {
      email: 'lachlan@gmail.com'
    },
    create: {
      email: 'lachlan@gmail.com',
      password: 'password',
      username: 'lachlan',
    }
  })

  seededUser
  logger.info('Seeding user')

  const seedClasses = await prisma.class.createMany({
    data: classSeedData
  })
  seedClasses

  logger.info(`Classes seeded successfully`)
  

  const seedRaceData = raceDataSeed.forEach(async (race) => {
    return await prisma.race.createMany({
      data: race
    })
  })
  seedRaceData

  logger.info(`Races seeded successfully`)

  
  const seedBackgroundData = await prisma.background.createMany({
    data: backgroundsSeedData
  })
  seedBackgroundData
  
  logger.info(`Backgrounds seeded successfully`)

 
  const seedClassFeatures = await prisma.classFeature.createMany({
    data: classFeaturesSeed
  })
  seedClassFeatures
  logger.info(`Class features seeded successfully`)

  const seedCantrips = cantripSeed.forEach(async (cantrip) => {
    const cantripSeed = await prisma.spell.create({
      data: cantrip
    })
    return cantripSeed
  })
  seedCantrips
  logger.info(`Cantrips seeded successfully`)

  const seedRaceFeatures = prisma.raceFeature.createMany({
    data: raceFeaturesData
  })
  logger.info(`Race features seeded successfully`)

  logger.info(`Seed complete`)


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })