import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  
  const barbarian = await prisma.class.create({
    data: {
      name: "Barbarian",
      hitDie: 12,
      weaponProficiencies: ['SIMPLE_WEAPON', 'MARTIAL_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'STRENGTH',
      savingThrowProficiencies: ['STRENGTH', 'CONSTITUTION'],
      availableSkillProficiencies: ['ANIMAL_HANDLING', 'ATHLETICS', 'INTIMIDATION', 'NATURE', 'NATURE', 'PERCEPTION', 'SURVIVAL'],
      startingEquipment: ['GreatAxe/MARTIAL_WEAPON', '2xHandaxe/SIMPLE_WEAPON', '4xJavelin/explorers_pack']
    }
  })
  
  const bard = await prisma.class.create({
    data: {
      name: 'Bard',
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: ['SHIELDS'],
      availableToolProficencies: ['MUSICAL_INSTRUMENT', 'MUSICAL_INSTRUMENT', 'MUSICAL_INSTRUMENT'],
      availableSkillProficiencies: ['ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL'],
      primaryAttribute: 'CHARISMA',
      savingThrowProficiencies: ['DEXTERITY', 'CHARISMA'],
      startingEquipment: ['Rapier/Longsword/Simple_Weapon', 'Diplomats Pack/Entertainers Pack', 'Leather armour', 'Dagger', 'Lute/MUSICAL_INSTRUMENT']
    }
  })
  
  const cleric = await prisma.class.create({
    data: {
      name: 'Cleric',
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'WISDOM',
      savingThrowProficiencies: ['WISDOM', 'CHARISMA'],
      availableSkillProficiencies: ['HISTORY', 'INSIGHT', 'MEDICINE', 'PERSUASION', 'RELIGION'],
      startingEquipment: ['Mace/SIMPLE_WEAPON', 'Scale_mail/Leather_armour', 'Light_crossbow+20xbolts/SIMPLE_WEAPON', 'Priests_pack/Explorers_pack']
    }
  })
  
  const druid = await prisma.class.create({
    data: {
      name: 'Druid',
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'WISDOM',
      savingThrowProficiencies: ['INTELLIGENCE', 'WISDOM'],
      availableSkillProficiencies: ['ARCANA', 'ANIMAL_HANDLING', 'INSIGHT', 'MEDICINE', 'NATURE', 'PERCEPTION', 'RELIGION', 'SURVIVAL'],
      startingEquipment: ['Wooden_shield/SIMPLE_WEAPON', 'Scimitar/SIMPLE_WEAPON', 'Leather_armour', 'Explorer_pack/Druids_pack']
    }
  })
  
  const fighter = await prisma.class.create({
    data: {
      name: 'Fighter',
      hitDie: 10,
      weaponProficiencies: ['SIMPLE_WEAPON', 'MARTIAL_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'HEAVY_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'STRENGTH',
      savingThrowProficiencies: ['STRENGTH', 'CONSTITUTION'],
      availableSkillProficiencies: ['ACROBATICS', 'ANIMAL_HANDLING', 'ATHLETICS', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'PERCEPTION', 'SURVIVAL'],
      startingEquipment: ['Chainmail/Splintmail', 'Longsword/SIMPLE_WEAPON', 'Shield/SIMPLE_WEAPON', 'Crossbow+20xbolts/SIMPLE_WEAPON', 'Dungeoneers_pack/Explorers_pack']
    }
  })
  
  const monk = await prisma.class.create({
    data: {
      name: 'Monk',
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: [],
      primaryAttribute: 'DEXTERITY',
      savingThrowProficiencies: ['STRENGTH', 'DEXTERITY'],
      availableSkillProficiencies: ['ACROBATICS', 'ATHLETICS', 'HISTORY', 'INSIGHT', 'RELIGION', 'STEALTH'],
      startingEquipment: ['Shortsword/SIMPLE_WEAPON', 'Dungeoneers_pack/Explorers_pack']
    }
  })
  
  const paladin = await prisma.class.create({
    data: {
      name: 'Paladin',
      hitDie: 10,
      weaponProficiencies: ['SIMPLE_WEAPON', 'MARTIAL_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'HEAVY_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'STRENGTH',
      savingThrowProficiencies: ['WISDOM', 'CHARISMA'],
      availableSkillProficiencies: ['ATHLETICS', 'INSIGHT', 'INTIMIDATION', 'MEDICINE', 'PERSUASION', 'RELIGION'],
      startingEquipment: ['Chainmail/Splintmail', 'Martial_weapon/SIMPLE_WEAPON', 'Shield/SIMPLE_WEAPON', 'Javelin/SIMPLE_WEAPON', 'Priests_pack/Explorers_pack']
    }
  })
  
  const ranger = await prisma.class.create({
    data: {
      name: 'Ranger',
      hitDie: 10,
      weaponProficiencies: ['SIMPLE_WEAPON', 'MARTIAL_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'SHIELDS'],
      primaryAttribute: 'DEXTERITY',
      savingThrowProficiencies: ['STRENGTH', 'DEXTERITY'],
      availableSkillProficiencies: ['ANIMAL_HANDLING', 'ATHLETICS', 'INSIGHT', 'INVESTIGATION', 'NATURE', 'PERCEPTION', 'STEALTH', 'SURVIVAL'],
      startingEquipment: ['Scale_mail/Leather_armour', '2xShortsword/SIMPLE_WEAPON', 'Dungeoneers_pack/Explorers_pack']
    }
  })

  const rogue = await prisma.class.create({
    data: {
      name: "Rogue",
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: ['LIGHT_ARMOUR'],
      primaryAttribute: 'DEXTERITY',
      savingThrowProficiencies: ['DEXTERITY', 'INTELLIGENCE'],
      availableSkillProficiencies: ['ACROBATICS', 'DECEPTION', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'PERCEPTION', 'PERSUASION', 'STEALTH'],
      startingEquipment: ['Rapier/Shortsword', 'Shortbow/Shortsword', "Burglars_Pack/Dungeoneers Pack/Explorers Pack", "Leather armour", "Dagger", "Dagger", "Thieves_tools"]
    },
  });
  
  const sorcerer = await prisma.class.create({
    data: {
      name: 'Sorcerer',
      hitDie: 6,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: [],
      primaryAttribute: 'CHARISMA',
      savingThrowProficiencies: ['CONSTITUTION', 'CHARISMA'],
      availableSkillProficiencies: ['ARCANA', 'DECEPTION', 'INSIGHT', 'INTIMIDATION', 'PERSUASION', 'RELIGION'],
      startingEquipment: ['Light_crossbow+20xbolts/SIMPLE_WEAPON', 'Component_pouch/Arcane_focus', 'Dungeoneers_pack/Explorers_pack']
    }
  })
  
  const warlock = await prisma.class.create({
    data: {
      name: 'Warlock',
      hitDie: 8,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: [],
      primaryAttribute: 'CHARISMA',
      savingThrowProficiencies: ['WISDOM', 'CHARISMA'],
      availableSkillProficiencies: ['ARCANA', 'DECEPTION', 'HISTORY', 'INTIMIDATION', 'INVESTIGATION', 'NATURE', 'RELIGION'],
      startingEquipment: ['Light_crossbow+20xbolts/SIMPLE_WEAPON', 'Component_pouch/Arcane_focus', 'Scholars_pack/Dungeoneers_pack']
    }
  })

  const wizard = await prisma.class.create({
    data: {
      name: 'Wizard',
      hitDie: 6,
      weaponProficiencies: ['SIMPLE_WEAPON'],
      armourProficiencies: [],
      primaryAttribute: 'INTELLIGENCE',
      savingThrowProficiencies: ['INTELLIGENCE', 'WISDOM'],
      availableSkillProficiencies: ['ARCANA', 'HISTORY', 'INSIGHT', 'INVESTIGATION', 'MEDICINE', 'RELIGION'],
      startingEquipment: ['Quarterstaff/SIMPLE_WEAPON', 'Component_pouch/Arcane_focus', 'Scholars_pack/Explorers_pack']
    }
  })

  barbarian
  bard
  cleric
  druid
  fighter
  monk
  paladin
  ranger
  rogue
  sorcerer
  warlock
  wizard
  return console.log(`Classes seeded successfully`)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })