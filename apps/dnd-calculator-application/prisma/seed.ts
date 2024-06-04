import { PrismaClient } from "@prisma/client";

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
        subRace: 'Half-Elf',
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
        subRace: 'Half-Orc',
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
        subRace: 'Human',
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

  const backgrounds = await prisma.background.createMany({
    data: [
      {
        backgroundName: 'Acolyte',
        backgroundDescription: 'You have spent your life in service to a temple, learning the rituals and practices of your faith',
        skillProficiencies: ['Insight', 'Religion'],
        toolProficiencies: [],
        languageSlotModifier: 2,
        backgroundFeatureTitle: 'Shelter of the Faithful',
        backgroundFeatureDescription: 'You and your companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith. ' +
        'Those who share your faith will support you (but only you) at a modest lifestyle.',
        suggestedCharacteristics: ["I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."],
        equipment: ['Holy_symbol', 'Prayer_book', '5xIncense', 'Vestments', 'Common_clothes', '15gp'],
      },
      {
        backgroundName: 'Charlatan',
        backgroundDescription: 'You are a con artist, a swindler, and a cheat. You have a silver tongue and a quick wit',
        skillProficiencies: ['Deception', 'Sleight of Hand'],
        toolProficiencies: ['Disguise Kit', 'Forgery Kit'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'False Identity',
        backgroundFeatureDescription: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona',
        suggestedCharacteristics: ["I lie about almost everything, even when there's no good reason to."],
        equipment: ['Fine_clothes', 'Disguise_kit', 'Tools_of_the_con', '15gp'], // Fix tools of the con, needs to be a choice of items/
      },
      {
        backgroundName: 'Criminal',
        backgroundDescription: 'You are an experienced criminal with a history of breaking the law and getting away with it',
        skillProficiencies: ['Deception', 'Stealth'],
        toolProficiencies: ['Thieves Tools'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Criminal Contact',
        backgroundFeatureDescription: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. ' +
        'You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.',
        suggestedCharacteristics: ["I have a 'tell' that reveals when I'm lying."],
        equipment: ['Crowbar', 'Dark_clothes', 'Thieves_tools', '15gp'],
      },
      {
        backgroundName: 'Entertainer',
        backgroundDescription: 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them',
        skillProficiencies: ['Acrobatics', 'Performance'],
        toolProficiencies: ['Disguise Kit', 'Musical Instrument'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'By Popular Demand',
        backgroundFeatureDescription: 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. ' +
        'At such a place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night.',
        suggestedCharacteristics: ["I'm a hopeless romantic, always searching for that 'special someone'."],
        equipment: ['Musical_instrument', 'Costume', '15gp'], // Fix musical instrument, needs to be a choice of items
      },
      {
        backgroundName: 'Folk Hero',
        backgroundDescription: 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion',
        skillProficiencies: ['Animal Handling', 'Survival'],
        toolProficiencies: ['Artisan Tools'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Rustic Hospitality',
        backgroundFeatureDescription: 'Since you come from the ranks of the common folk, you fit in among them with ease. ' +
        'You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them.',
        suggestedCharacteristics: ["I judge people by their actions, not their words."],
        equipment: ['Artisan_tools', 'Shovel', 'Iron_pot', 'Common_clothes', '10gp'],
      },
      {
        backgroundName: 'Guild Artisan',
        backgroundDescription: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans",
        skillProficiencies: ['Insight', 'Persuasion'],
        toolProficiencies: ['Artisan Tools'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Guild Membership',
        backgroundFeatureDescription: 'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. ' +
        'You know the practices of your guild and the laws of the community. ' +
        'Your guild will provide you with lodging and food if necessary, and pay for your funeral if needed. ' +
        'In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.',
        suggestedCharacteristics: ["I'm willing to listen to every side of an argument before I make my own judgment."],
        equipment: ['Artisan_tools', 'Letter_of_introduction', 'Travelers_clothes', '15gp'],
      },
      {
        backgroundName: 'Hermit',
        backgroundDescription: 'You lived in seclusion, either in a sheltered community such as a monastery, or entirely alone for a period of time',
        skillProficiencies: ['Medicine', 'Religion'],
        toolProficiencies: [],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Discovery',
        backgroundFeatureDescription: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. ' +
        'The exact nature of this revelation depends on the nature of your seclusion. ' +
        'It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature.',
        suggestedCharacteristics: ["I'm driven by a wanderlust that led me away from home."],
        equipment: ['Scroll_case', 'Winter_blanket', 'Common_clothes', 'Herbalism_kit', '5gp'],
      },
      {
        backgroundName: 'Noble',
        backgroundDescription: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence',
        skillProficiencies: ['History', 'Persuasion'],
        toolProficiencies: [],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Position of Privilege',
        backgroundFeatureDescription: 'Thanks to your noble birth, people are inclined to think the best of you. ' +
        'You are welcome in high society, and people assume you have the right to be wherever you are. ' +
        'The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. ' +
        'You can secure an audience with a local noble if you need to.',
        suggestedCharacteristics: ["I have a strong sense of fair play and always try to find the most equitable solution to arguments."],
        equipment: ['Fine_clothes', 'Signet_ring', 'Scroll_of_pedigree', 'Purse', '25gp'],
      },
      {
        backgroundName: 'Outlander',
        backgroundDescription: 'You grew up in the wilds, far from civilization and the comforts of town and technology',
        skillProficiencies: ['Athletics', 'Survival'],
        toolProficiencies: ['Musical Instrument'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Wanderer',
        backgroundFeatureDescription: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. ' +
        'In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.',
        suggestedCharacteristics: ["I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear."],
        equipment: ['Staff', 'Hunting_trap', 'Trophy_from_an_animal', 'Travelers_clothes', '10gp'],
      },
      {
        backgroundName: 'Sage',
        backgroundDescription: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you',
        skillProficiencies: ['Arcana', 'History'],
        toolProficiencies: [],
        languageSlotModifier: 2,
        backgroundFeatureTitle: 'Researcher',
        backgroundFeatureDescription: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. ' +
        'Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. ' +
        'Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. ' +
        'Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.',
        suggestedCharacteristics: ["I'm willing to listen to every side of an argument before I make my own judgment."],
        equipment: ['Bottle_of_black_ink', 'Quill', 'Small_knife', 'Letter_from_a_dead_colleague', 'Common_clothes', '10gp'],
      },
      {
        backgroundName: 'Sailor',
        backgroundDescription: 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft',
        skillProficiencies: ['Athletics', 'Perception'],
        toolProficiencies: ['Navigator Tools', 'Water Vehicles'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: "Ship's Passage",
        backgroundFeatureDescription: 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. ' +
        'You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate).',
        suggestedCharacteristics: ["I follow orders, even if I think they're wrong."],
        equipment: ['Belaying_pin', '50ft_of_rope', 'Lucky_charm', 'Common_clothes', '10gp'],
      },
      {
        backgroundName: 'Soldier',
        backgroundDescription: 'You are a warrior, trained to fight and defend. You served in an army, either as a regular soldier or as an officer',
        skillProficiencies: ['Athletics', 'Intimidation'],
        toolProficiencies: ['Gaming Set'],
        languageSlotModifier: 0,
        backgroundFeatureTitle: 'Military Rank',
        backgroundFeatureDescription: 'You have a military rank from your career as a soldier. ' +
        'Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. ' +
        'You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. ' +
        'You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.',
        suggestedCharacteristics: ["I can stare down a hell hound without flinching."],
        equipment: ['Insignia_of_rank', 'Trophy_from_a_fallen_enemy', 'Set_of_bone_dice', 'Common_clothes', '10gp'],
      }
    ]
  })

  backgrounds
  console.log(`Backgrounds seeded successfully`)

  const baseBarbarianFeatures = await prisma.classFeature.createMany({
    data: [
      {
        className: 'Barbarian',
        featureName: 'Rage',
        featureDescription: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. " +
        "While raging, you gain the following benefits if you aren't wearing heavy armor: " + "\n" + "• You have advantage on Strength checks and Strength saving throws." + "\n" +
        "• When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table." + "\n" +
        "• You have resistance to bludgeoning, piercing, and slashing damage." + "\n" + "If you are able to cast spells, you can't cast them or concentrate on them while raging.",
        featureLevel: 1,
      },
      {
        className: 'Barbarian',
        featureName: 'Unarmored Defense',
        featureDescription: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. " +
        "You can use a shield and still gain this benefit.",
        featureLevel: 1,
      },
      {
        className: 'Barbarian',
        featureName: 'Reckless Attack',
        featureDescription: "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. " +
        "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, " +
        "but attack rolls against you have advantage until your next turn.",
        featureLevel: 2,
      },
      {
        className: 'Barbarian',
        featureName: 'Danger Sense',
        featureDescription: "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. " +
        "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        featureLevel: 2,
      },
      {
        className: 'Barbarian',
        featureName: 'Primal Path',
        featureDescription: "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description",
        featureLevel: 3,
      },
      {
        className: 'Barbarian',
        featureName: 'Ability Score Improvement',
        featureDescription: "increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. ",
        featureLevel: 4,
      },
      {
        className: "Barbarian",
        featureName: "Extra Attack",
        featureDescription: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
        featureLevel: 5,
      },
      {
        className: "Barbarian",
        featureName: "Fast Movement",
        featureDescription: "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
        featureLevel: 5,
      },
      {
        className: "Barbarian",
        featureName: "Feral Instinct",
        featureDescription: "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
        featureLevel: 7,
      },
      {
        className: "Barbarian",
        featureName: "Brutal Critical",
        featureDescription: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
        featureLevel: 9,
      },
      {
        className: "Barbarian",
        featureName: "Relentless Rage",
        featureDescription: "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. " +
        "If you succeed, you drop to 1 hit point instead.",
        featureLevel: 11,
      },
      {
        className: "Barbarian",
        featureName: "Persistent Rage",
        featureDescription: "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        featureLevel: 15,
      },
      {
        className: "Barbarian",
        featureName: "Indomitable Might",
        featureDescription: "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        featureLevel: 18,
      },
      {
        className: "Barbarian",
        featureName: "Primal Champion",
        featureDescription: "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        featureLevel: 20,
      }
    ]
  })

  const berserkerFeatures = await prisma.classFeature.createMany({
    data: [
      {
        className: 'Barbarian',
        featureName: 'Frenzy',
        featureDescription: `Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a 
        single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.`,
        featureLevel: 3,
        subclass: 'Berserker'
      },
      {
        className: 'Barbarian',
        featureName: 'Mindless Rage',
        featureDescription: `Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended 
        for the duration of the rage.`,
        featureLevel: 6,
        subclass: 'Berserker'
      },
      {
        className: 'Barbarian',
        featureName: 'Intimidating Presence',
        featureDescription: `Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 
        30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you 
        until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect 
        ends if the creature ends its turn out of line of sight or more than 60 feet away from you.`,
        featureLevel: 10,
        subclass: 'Berserker'
      },
      {
        className: 'Barbarian',
        featureName: 'Retaliation',
        featureDescription: `Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.`,
        featureLevel: 14,
        subclass: 'Berserker'
      }
    ]
  })

  baseBarbarianFeatures
  berserkerFeatures

  const wizardFeatures = await prisma.classFeature.createMany({
    data: [
      {
        className: 'Wizard',
        featureName: 'Spellcasting',
        featureDescription: 'You have learned to cast spells as a wizard, and can prepare a number of spells each day equal to your wizard level + your Intelligence modifier. ' +
        'You can cast these spells using your spell slots, which are determined by your level. You can also cast cantrips, which are spells that require no spell slots to cast.',
        featureLevel: 1
      },
      {
        className: 'Wizard',
        featureName: 'Arcane Recovery',
        featureDescription: 'You have learned to recover some of your magical energy by resting. Once per day when you finish a short rest, you can choose expended spell slots to recover. ' +
        'The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
        featureLevel: 1
      },
      {
        className: 'Wizard',
        featureName: 'Arcane Tradition',
        featureDescription: 'At 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion',
        featureLevel: 2
      }
    ]
  })

  console.log(`Seed complete`)


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })