import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const barbarian = await prisma.class.create({
    data: {
      className: "Barbarian",
      hitDie: 12,
      weaponProficiencies: ['Simple', 'Martial'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
      primaryAttribute: 'Strength',
      spellCastingAttribute: '',
      savingThrowProficiencies: ['Strength', 'Constitution'],
      availableSkillProficiencies: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Nature', 'Perception', 'Survival'],
      startingEquipment: ['GreatAxe/Martial', '2xHandaxe/Simple', '4xJavelin/explorers_pack'],
      recommendedStandardArray: [15, 14, 13, 10, 12, 8]
    }
  })
  
  const bard = await prisma.class.create({
    data: {
      className: 'Bard',
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: ['Shield'],
      availableToolProficencies: ['Instrument', 'Instrument', 'Instrument'],
      availableSkillProficiencies: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],
      primaryAttribute: 'Charisma',
      spellCastingAttribute: 'Charisma',
      savingThrowProficiencies: ['Dexterity', 'Charisma'],
      startingEquipment: ['Rapier/Longsword/Simple_Weapon', 'Diplomats Pack/Entertainers Pack', 'Leather armour', 'Dagger', 'Lute/Instrument'],
      recommendedStandardArray: [8, 14, 12, 13, 10, 15]
    }
  })
  
  const cleric = await prisma.class.create({
    data: {
      className: 'Cleric',
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
      primaryAttribute: 'Wisdom',
      spellCastingAttribute: 'Wisdom',
      savingThrowProficiencies: ['Wisdom', 'Charisma'],
      availableSkillProficiencies: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
      startingEquipment: ['Mace/Simple', 'Scale_mail/Leather_armour', 'Light_crossbow+20xbolts/Simple', 'Priests_pack/Explorers_pack'],
      recommendedStandardArray: [13, 10, 14, 12, 15, 8]
    }
  })
  
  const druid = await prisma.class.create({
    data: {
      className: 'Druid',
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
      primaryAttribute: 'Wisdom',
      spellCastingAttribute: 'Wisdom',
      savingThrowProficiencies: ['Intelligence', 'Wisdom'],
      availableSkillProficiencies: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
      startingEquipment: ['Wooden_shield/Simple', 'Scimitar/Simple', 'Leather_armour', 'Explorer_pack/Druids_pack'],
      recommendedStandardArray: [10, 12, 14, 13, 15, 8]
    }
  })
  
  const fighter = await prisma.class.create({
    data: {
      className: 'Fighter',
      hitDie: 10,
      weaponProficiencies: ['Simple', 'Martial'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shield'],
      primaryAttribute: 'Strength',
      spellCastingAttribute: '',
      savingThrowProficiencies: ['Strength', 'Constitution'],
      availableSkillProficiencies: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
      startingEquipment: ['Chainmail/Splintmail', 'Longsword/Simple', 'Shield/Simple', 'Crossbow+20xbolts/Simple', 'Dungeoneers_pack/Explorers_pack'],
      recommendedStandardArray: [15, 8, 14, 13, 12, 10]
    }
  })
  
  const monk = await prisma.class.create({
    data: {
      className: 'Monk',
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: [],
      primaryAttribute: 'Dexterity',
      spellCastingAttribute: '',
      savingThrowProficiencies: ['Strength', 'Dexterity'],
      availableSkillProficiencies: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'],
      startingEquipment: ['Shortsword/Simple', 'Dungeoneers_pack/Explorers_pack'],
      recommendedStandardArray: [8, 15, 13, 14, 10, 12]
    }
  })
  
  const paladin = await prisma.class.create({
    data: {
      className: 'Paladin',
      hitDie: 10,
      weaponProficiencies: ['Simple', 'Martial'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shield'],
      primaryAttribute: 'Strength',
      spellCastingAttribute: 'Charisma',
      savingThrowProficiencies: ['Wisdom', 'Charisma'],
      availableSkillProficiencies: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'],
      startingEquipment: ['Chainmail/Splintmail', 'Martial_weapon/Simple', 'Shield/Simple', 'Javelin/Simple', 'Priests_pack/Explorers_pack'],
      recommendedStandardArray: [15, 8, 13, 10, 12, 14]
    }
  })
  
  const ranger = await prisma.class.create({
    data: {
      className: 'Ranger',
      hitDie: 10,
      weaponProficiencies: ['Simple', 'Martial'],
      armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
      primaryAttribute: 'Dexterity',
      spellCastingAttribute: 'Wisdom',
      savingThrowProficiencies: ['Strength', 'Dexterity'],
      availableSkillProficiencies: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],
      startingEquipment: ['Scale_mail/Leather_armour', '2xShortsword/Simple', 'Dungeoneers_pack/Explorers_pack'],
      recommendedStandardArray: [8, 15, 13, 12, 14, 10]
    }
  })

  const rogue = await prisma.class.create({
    data: {
      className: "Rogue",
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: ['Light Armour'],
      primaryAttribute: 'Dexterity',
      spellCastingAttribute: '',
      savingThrowProficiencies: ['Dexterity', 'Intelligence'],
      availableSkillProficiencies: ['Acrobatics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Persuasion', 'Stealth'],
      startingEquipment: ['Rapier/Shortsword', 'Shortbow/Shortsword', "Burglars_Pack/Dungeoneers Pack/Explorers Pack", "Leather armour", "Dagger",
       "Dagger", "Thieves_tools"],
      recommendedStandardArray: [8, 15, 14, 13, 12, 10]
    },
  });
  
  const sorcerer = await prisma.class.create({
    data: {
      className: 'Sorcerer',
      hitDie: 6,
      weaponProficiencies: ['Simple'],
      armourProficiencies: [],
      primaryAttribute: 'Charisma',
      spellCastingAttribute: 'Charisma',
      savingThrowProficiencies: ['Constitution', 'Charisma'],
      availableSkillProficiencies: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'],
      startingEquipment: ['Light_crossbow+20xbolts/Simple', 'Component_pouch/Arcane_focus', 'Dungeoneers_pack/Explorers_pack'],
      recommendedStandardArray: [8, 13, 14, 12, 10, 15]
    }
  })
  
  const warlock = await prisma.class.create({
    data: {
      className: 'Warlock',
      hitDie: 8,
      weaponProficiencies: ['Simple'],
      armourProficiencies: [],
      primaryAttribute: 'Charisma',
      spellCastingAttribute: 'Charisma',
      savingThrowProficiencies: ['Wisdom', 'Charisma'],
      availableSkillProficiencies: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
      startingEquipment: ['Light_crossbow+20xbolts/Simple', 'Component_pouch/Arcane_focus', 'Scholars_pack/Dungeoneers_pack'],
      recommendedStandardArray: [8, 13, 14, 12, 10, 15]
    }
  })

  const wizard = await prisma.class.create({
    data: {
      className: 'Wizard',
      hitDie: 6,
      weaponProficiencies: ['Simple'],
      armourProficiencies: [],
      primaryAttribute: 'Intelligence',
      spellCastingAttribute: 'Intelligence',
      savingThrowProficiencies: ['Intelligence', 'Wisdom'],
      availableSkillProficiencies: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
      startingEquipment: ['Quarterstaff/Simple', 'Component_pouch/Arcane_focus', 'Scholars_pack/Explorers_pack'],
      recommendedStandardArray: [8, 13, 14, 15, 12, 10]
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
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Blue', briefDescription: 'Blue dragons breathe lightning and are associated with lightning and thunder', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['LIGHTNING'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Brass', briefDescription: 'Brass dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Bronze', briefDescription: 'Bronze dragons breathe lightning and are associated with lightning and thunder', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['LIGHTNING'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Copper', briefDescription: 'Copper dragons breathe acid and are associated with acid and poison', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['ACID'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Gold', briefDescription: 'Gold dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Green', briefDescription: 'Green dragons breathe poison and are associated with poison and acid', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['ACID'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Red', briefDescription: 'Red dragons breathe fire and are associated with fire and heat', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['FIRE'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'Silver', briefDescription: 'Silver dragons breathe cold and are associated with cold and ice', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['COLD'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
      {parentRace: 'Dragonborn', subRace: 'White', briefDescription: 'White dragons breathe cold and are associated with cold and ice', 
      creatureType: 'HUMANOID', darkVision: 0, statPoolModifier: [2, 0, 0, 0, 0, 1], damageTypeResistance: ['COLD'], damageTypeAdvantageThrows: [],
      conditionAdvantageThrows: [], languages: ['Common', 'Draconic'], size: 'MEDIUM', MaxHealthModifier: 0, cantripSlotModifier: 0, 
      languageSlotModifier: 0, walkingSpeed: 9},
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
        languages: ['Common', 'Dwarvish'],
        size: 'MEDIUM',
        MaxHealthModifier: 1,
        cantripSlotModifier: 0,
        languageSlotModifier: 0,
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
        languages: ['Common', 'Dwarvish'],
        size: 'MEDIUM',
        MaxHealthModifier: 0,
        cantripSlotModifier: 0,
        languageSlotModifier: 0,
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
        languages: ['Common', 'Elvish'],
        size: 'MEDIUM',
        cantripSlotModifier: 1,
        languageSlotModifier: 1,
        walkingSpeed: 9,
        skillProficiencies: ['Perception'],
        weaponProficiencies: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']
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
        languages: ['Common', 'Elvish'],
        size: 'MEDIUM',
        walkingSpeed: 35,
        skillProficiencies: ['Perception'],
        weaponProficiencies: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']
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
        languages: ['Common', 'Gnomish'],
        size: 'SMALL',
        walkingSpeed: 7.6,
        cantripSlotModifier: 1,
        languageSlotModifier: 1,
        toolProficiencies: ["Tinker's Tools"]
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
        languages: ['Common', 'Gnomish'],
        size: 'SMALL',
        walkingSpeed: 7.6,
        cantripSlotModifier: 1,
        languageSlotModifier: 1,
        toolProficiencies: ["Tinker's Tools"]
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
        languages: ['Common', 'Elvish'],
        size: 'MEDIUM',
        walkingSpeed: 9,
        languageSlotModifier: 1,
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
        languages: ['Common', 'HALFLING'],
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
        languages: ['Common', 'HALFLING'],
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
        languages: ['Common', 'Orcish'],
        size: 'MEDIUM',
        walkingSpeed: 30,
        skillProficiencies: ['Intimidation']
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
        languages: ['Common'],
        languageSlotModifier: 1,
        size: 'MEDIUM',
        walkingSpeed: 9,
        skillProficiencies: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 
        'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion',
        'Religion', 'Sleight of Hand', 'Stealth', 'Survival']
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
        languages: ['Common', 'INFERNAL'],
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