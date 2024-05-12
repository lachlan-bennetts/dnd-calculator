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
  console.log(`Classes seeded successfully`)

  const dragonborn = await prisma.race.createMany({
    data: [
      {parentRace: 'Dragonborn', subRace: 'Black', briefDescription: 'Black dragons breathe acid and are associated with acid and poison', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['ACID'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Blue', briefDescription: 'Blue dragons breathe lightning and are associated with lightning and thunder', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['LIGHTNING'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Brass', briefDescription: 'Brass dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Bronze', briefDescription: 'Bronze dragons breathe lightning and are associated with lightning and thunder', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['LIGHTNING'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Copper', briefDescription: 'Copper dragons breathe acid and are associated with acid and poison', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['ACID'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Gold', briefDescription: 'Gold dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Green', briefDescription: 'Green dragons breathe poison and are associated with poison and acid', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['ACID'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Red', briefDescription: 'Red dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Silver', briefDescription: 'Silver dragons breathe cold and are associated with cold and ice', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['COLD'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'White', briefDescription: 'White dragons breathe cold and are associated with cold and ice', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['COLD'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['COMMON', 'DRACONIC'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      LanguageSlotModifier: 0, walkingSpeed: 9},
    ]
  })

  const dwarf = await prisma.race.createMany({
    data:[
      {
        parentRace: 'Dwarf',
        subRace: 'Hill',
        briefDescription: 'Hill dwarves are known for their love of the earth and their ability to endure',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 0, 2, 0, 1, 0],
        damageTypeResistance: ['POISON'],
        damageTypeAdvantageThrows: ['POISON'],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'DWARVISH'],
        size: 'MEDIUM',
        MaxHealthModifier: 1,
        cantripSlotModifier: 0,
        LanguageSlotModifier: 0,
        walkingSpeed: 7.6,
        weaponProficiencies: ['BATTLEAXE', 'HANDAXE', 'LIGHT_HAMMER', 'WARHAMMER']
      },
      {
        parentRace: 'Dwarf',
        subRace: 'Mountain',
        briefDescription: 'Mountain dwarves are known for their strength and martial prowess',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [2, 0, 2, 0, 0, 0],
        damageTypeResistance: ['POISON'],
        damageTypeAdvantageThrows: ['POISON'],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'DWARVISH'],
        size: 'MEDIUM',
        MaxHealthModifier: 0,
        cantripSlotModifier: 0,
        LanguageSlotModifier: 0,
        walkingSpeed: 7.6
      }
    ]
  })

  const elf = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Elf',
        subRace: 'High',
        briefDescription: 'High elves are known for their grace and magical prowess',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 2, 0, 0, 0, 1],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: ['CHARMED'],
        languages: ['COMMON', 'ELVISH'],
        size: 'MEDIUM',
        cantripSlotModifier: 1,
        LanguageSlotModifier: 1,
        walkingSpeed: 9,
        skillProficiencies: ['PERCEPTION'],
        weaponProficiencies: ['LONGSWORD', 'SHORTSWORD', 'SHORTBOW', 'LONGBOW']
      },
      {
        parentRace: 'Elf',
        subRace: 'Wood',
        briefDescription: 'Wood elves are known for their connection to nature and their swiftness',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 2, 0, 0, 1, 0],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: ['CHARMED'],
        languages: ['COMMON', 'ELVISH'],
        size: 'MEDIUM',
        walkingSpeed: 35,
        skillProficiencies: ['PERCEPTION'],
        weaponProficiencies: ['LONGSWORD', 'SHORTSWORD', 'SHORTBOW', 'LONGBOW']
      }
    ]
  })

  const gnome = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Gnome',
        subRace: 'Forest',
        briefDescription: 'Forest gnomes are known for their connection to nature and their curiosity',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 1, 0, 2, 0, 0],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'GNOMISH'],
        size: 'SMALL',
        walkingSpeed: 7.6,
        cantripSlotModifier: 1,
        LanguageSlotModifier: 1,
        toolProficiencies: ['TINKERS_TOOLS']
      },
      {
        parentRace: 'Gnome',
        subRace: 'Rock',
        briefDescription: 'Rock gnomes are known for their inventiveness and their ability to create',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 0, 1, 2, 0, 0],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'GNOMISH'],
        size: 'SMALL',
        walkingSpeed: 7.6,
        cantripSlotModifier: 1,
        LanguageSlotModifier: 1,
        toolProficiencies: ['TINKERS_TOOLS']
      }
    ]
  })

  const halfElf = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Half-Elf',
        subRace: '',
        briefDescription: 'Half-elves are known for their adaptability and their ability to connect with others',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 0, 0, 0, 0, 2],
        statPoolIncrease: 2,
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: ['CHARMED'],
        languages: ['COMMON', 'ELVISH'],
        size: 'MEDIUM',
        walkingSpeed: 9,
        LanguageSlotModifier: 1,
      }
    ]
  })

  const halfling = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Halfling',
        subRace: 'Lightfoot',
        briefDescription: 'Lightfoot halflings are known for their stealth and their ability to hide',
        creatureType: 'HUMANOID',
        darkVision: 0,
        statPoolModifier: [0, 2, 0, 0, 0, 1],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: ['FRIGHTENED'],
        languages: ['COMMON', 'HALFLING'],
        size: 'SMALL',
        walkingSpeed: 7.6,
      },
      {
        parentRace: 'Halfling',
        subRace: 'Stout',
        briefDescription: 'Stout halflings are known for their endurance and their ability to resist poison',
        creatureType: 'HUMANOID',
        darkVision: 0,
        statPoolModifier: [0, 2, 1, 0, 0, 0],
        damageTypeResistance: ['POISON'],
        damageTypeAdvantageThrows: ['POISON'],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'HALFLING'],
        size: 'SMALL',
        walkingSpeed: 7.6,
      }
    ]
  })

  
  const halfOrc = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Half-Orc',
        subRace: '',
        briefDescription: 'Half-orcs are known for their strength and their ability to endure',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [2, 0, 1, 0, 0, 0],
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'ORC'],
        size: 'MEDIUM',
        walkingSpeed: 30,
        skillProficiencies: []
      }
    ]
  })

  const human = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Human',
        subRace: '',
        briefDescription: 'Humans are known for their adaptability and their ability to connect with others',
        creatureType: 'HUMANOID',
        darkVision: 0,
        statPoolModifier: [1, 1, 1, 1, 1, 1],
        statPoolIncrease: 2,
        damageTypeResistance: [],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: [],
        languages: ['COMMON'],
        LanguageSlotModifier: 1,
        size: 'MEDIUM',
        walkingSpeed: 9,
        skillProficiencies: ['ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 
        'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION',
        'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL']
      }
    ]
  })

  const tiefling = await prisma.race.createMany({
    data: [
      {
        parentRace: 'Tiefling',
        subRace: 'Asmodeus',
        briefDescription: 'Asmodeus tieflings are known for their connection to the lord of the nine hells',
        creatureType: 'HUMANOID',
        darkVision: 60,
        statPoolModifier: [0, 0, 0, 1, 0, 2],
        damageTypeResistance: ['FIRE'],
        damageTypeAdvantageThrows: [],
        conditionAdvantageThrows: [],
        languages: ['COMMON', 'INFERNAL'],
        size: 'MEDIUM',
        walkingSpeed: 9,
      }
    ]
  })

  dragonborn
  dwarf
  elf
  gnome
  halfElf
  halfling
  halfOrc
  human
  tiefling

  console.log(`Races seeded successfully`)
  console.log(`Seed complete`)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })