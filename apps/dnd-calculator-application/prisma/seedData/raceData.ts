const dragonborn = [
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


const dwarf = [
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


const elf = [
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


const gnome = [
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


const halfElf = [
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


const halfling = [
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



const halfOrc = [
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


const human = [
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


const tiefling = [
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

export const raceDataSeed = [dragonborn, dwarf, elf, gnome, halfElf, halfling, halfOrc, human, tiefling]