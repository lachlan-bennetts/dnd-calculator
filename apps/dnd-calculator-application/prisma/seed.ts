import { PrismaClient } from "@prisma/client";
import { cantripSeed } from "./seedData/cantripData";
import { classSeedData } from "./seedData/classData";
import { raceDataSeed } from "./seedData/raceData";
import { backgroundsSeedData } from "./seedData/backgroundData";
import { barbarianFeatures } from "./seedData/classFeatureData";

const prisma = new PrismaClient();

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
  console.log('Seeding user')

  const seedClasses = await prisma.class.createMany({
    data: classSeedData
  })
  seedClasses

  console.log(`Classes seeded successfully`)
  

  const seedRaceData = raceDataSeed.forEach(async (race) => {
    return await prisma.race.createMany({
      data: race
    })
  })
  seedRaceData

  console.log(`Races seeded successfully`)

  
  const seedBackgroundData = await prisma.background.createMany({
    data: backgroundsSeedData
  })
  seedBackgroundData
  
  console.log(`Backgrounds seeded successfully`)

 
  const seedClassFeatures = await prisma.classFeature.createMany({
    data: barbarianFeatures
  })
  seedClassFeatures
  console.log(`Class features seeded successfully`)

  const seedCantrips = cantripSeed.forEach(async (cantrip) => {
    const cantripSeed = await prisma.spell.create({
      data: cantrip
    })
    return cantripSeed
  })
  seedCantrips
  console.log(`Cantrips seeded successfully`)

  console.log(`Seed complete`)


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })