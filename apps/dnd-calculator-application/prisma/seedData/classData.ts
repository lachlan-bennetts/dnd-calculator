const barbarian = {
    className: "Barbarian",
    hitDie: 12,
    weaponProficiencies: ['Simple', 'Martial'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
    primaryAttribute: 'Strength',
    spellCastingAttribute: '',
    savingThrowProficiencies: ['Strength', 'Constitution'],
    availableSkillProficiencies: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Nature', 'Perception', 'Survival'],
    startingEquipment: ['GreatAxe/Martial', '2xHandaxe/Simple', '4xJavelin/explorers_pack'],
    recommendedStandardArray: [15, 14, 13, 10, 12, 8],
    subClassTitles: ['Path of the Berserker', 'Path of the Totem Warrior'],
    subClasses: ['Berserker', 'Totem Warrior'],
    subClassStart: 3
  }


const bard = {
    className: 'Bard',
    hitDie: 8,
    weaponProficiencies: ['Simple'],
    armourProficiencies: ['Shield'],
    availableToolProficencies: ['Instrument', 'Instrument', 'Instrument'],
    availableSkillProficiencies: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 
      'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 
      'Stealth', 'Survival'],
    primaryAttribute: 'Charisma',
    spellCastingAttribute: 'Charisma',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15],
    savingThrowProficiencies: ['Dexterity', 'Charisma'],
    startingEquipment: ['Rapier/Longsword/Simple_Weapon', 'Diplomats Pack/Entertainers Pack', 'Leather armour', 'Dagger', 'Lute/Instrument'],
    recommendedStandardArray: [8, 14, 12, 13, 10, 15],
    subClassTitles: ['College of Lore', 'College of Valor'],
    subClasses: ['Lore', 'Valor'],
    subClassStart: 3
  }


const cleric = {
    className: 'Cleric',
    hitDie: 8,
    weaponProficiencies: ['Simple'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
    primaryAttribute: 'Wisdom',
    spellCastingAttribute: 'Wisdom',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15],
    savingThrowProficiencies: ['Wisdom', 'Charisma'],
    availableSkillProficiencies: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
    startingEquipment: ['Mace/Simple', 'Scale_mail/Leather_armour', 'Light_crossbow+20xbolts/Simple', 'Priests_pack/Explorers_pack'],
    recommendedStandardArray: [13, 10, 14, 12, 15, 8],
    subClassTitles: ['Knowledge Domain', 'Life Domain', 'Light Domain', 'Nature Domain', 'Tempest Domain', 'Trickery Domain', 'War Domain'],
    subClasses: ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War'],
    subClassStart: 1
  }


const druid = {
    className: 'Druid',
    hitDie: 8,
    weaponProficiencies: ['Simple'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
    primaryAttribute: 'Wisdom',
    spellCastingAttribute: 'Wisdom',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15],
    savingThrowProficiencies: ['Intelligence', 'Wisdom'],
    availableSkillProficiencies: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
    startingEquipment: ['Wooden_shield/Simple', 'Scimitar/Simple', 'Leather_armour', 'Explorer_pack/Druids_pack'],
    recommendedStandardArray: [10, 12, 14, 13, 15, 8],
    subClassTitles: ['Circle of the Land', 'Circle of the Moon'],
    subClasses: ['Land', 'Moon'],
    subClassStart: 2
  }


const fighter = {
    className: 'Fighter',
    hitDie: 10,
    weaponProficiencies: ['Simple', 'Martial'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shield'],
    primaryAttribute: 'Strength',
    spellCastingAttribute: '',
    savingThrowProficiencies: ['Strength', 'Constitution'],
    availableSkillProficiencies: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
    startingEquipment: ['Chainmail/Splintmail', 'Longsword/Simple', 'Shield/Simple', 'Crossbow+20xbolts/Simple', 'Dungeoneers_pack/Explorers_pack'],
    recommendedStandardArray: [15, 8, 14, 13, 12, 10],
    subClassTitles: ['Champion', 'Battle Master', 'Eldritch Knight'],
    subClasses: ['Champion', 'Battle Master', 'Eldritch Knight'],
    subClassStart: 3
  }


const monk = {
    className: 'Monk',
    hitDie: 8,
    weaponProficiencies: ['Simple'],
    armourProficiencies: [],
    primaryAttribute: 'Dexterity',
    spellCastingAttribute: '',
    savingThrowProficiencies: ['Strength', 'Dexterity'],
    availableSkillProficiencies: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'],
    startingEquipment: ['Shortsword/Simple', 'Dungeoneers_pack/Explorers_pack'],
    recommendedStandardArray: [8, 15, 13, 14, 10, 12],
    subclassTitles: ['Way of the Open Hand', 'Way of Shadow', 'Way of the Four Elements'],
    subClasses: ['Open Hand', 'Shadow', 'Four Elements'],
    subClassStart: 3
  }


const paladin = {
    className: 'Paladin',
    hitDie: 10,
    weaponProficiencies: ['Simple', 'Martial'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Heavy Armour', 'Shield'],
    primaryAttribute: 'Strength',
    spellCastingAttribute: 'Charisma',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15],
    savingThrowProficiencies: ['Wisdom', 'Charisma'],
    availableSkillProficiencies: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'],
    startingEquipment: ['Chainmail/Splintmail', 'Martial_weapon/Simple', 'Shield/Simple', 'Javelin/Simple', 'Priests_pack/Explorers_pack'],
    recommendedStandardArray: [15, 8, 13, 10, 12, 14],
    subClassTitles: ['Oath of Devotion', 'Oath of the Ancients', 'Oath of Vengeance'],
    subClasses: ['Devotion', 'Ancients', 'Vengeance'],
    subClassStart: 3
  }


const ranger = {
    className: 'Ranger',
    hitDie: 10,
    weaponProficiencies: ['Simple', 'Martial'],
    armourProficiencies: ['Light Armour', 'Medium Armour', 'Shield'],
    primaryAttribute: 'Dexterity',
    spellCastingAttribute: 'Wisdom',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15],
    savingThrowProficiencies: ['Strength', 'Dexterity'],
    availableSkillProficiencies: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],
    startingEquipment: ['Scale_mail/Leather_armour', '2xShortsword/Simple', 'Dungeoneers_pack/Explorers_pack'],
    recommendedStandardArray: [8, 15, 13, 12, 14, 10],
    subClassTitles: ['Hunter', 'Beast Master'],
    subClasses: ['Hunter', 'Beast Master'],
    subClassStart: 3
  }


const rogue = {
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
    recommendedStandardArray: [8, 15, 14, 13, 12, 10],
    subClassTitles: ['Thief', 'Assassin', 'Arcane Trickster'],
    subClasses: ['Thief', 'Assassin', 'Arcane Trickster'],
    subClassStart: 3
  };

const sorcerer = {
    className: 'Sorcerer',
    hitDie: 6,
    weaponProficiencies: ['Simple'],
    armourProficiencies: [],
    primaryAttribute: 'Charisma',
    spellCastingAttribute: 'Charisma',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
    savingThrowProficiencies: ['Constitution', 'Charisma'],
    availableSkillProficiencies: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'],
    startingEquipment: ['Light_crossbow+20xbolts/Simple', 'Component_pouch/Arcane_focus', 'Dungeoneers_pack/Explorers_pack'],
    recommendedStandardArray: [8, 13, 14, 12, 10, 15],
    subClassTitles: ['Draconic Bloodline', 'Wild Magic'],
    subClasses: ['Draconic Bloodline', 'Wild Magic'],
    subClassStart: 1
  }


const warlock = {
    className: 'Warlock',
    hitDie: 8,
    weaponProficiencies: ['Simple'],
    armourProficiencies: [],
    primaryAttribute: 'Charisma',
    spellCastingAttribute: 'Charisma',
    spellCapacity: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15],
    savingThrowProficiencies: ['Wisdom', 'Charisma'],
    availableSkillProficiencies: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
    startingEquipment: ['Light_crossbow+20xbolts/Simple', 'Component_pouch/Arcane_focus', 'Scholars_pack/Dungeoneers_pack'],
    recommendedStandardArray: [8, 13, 14, 12, 10, 15],
    subClassTitles: ['The Archfey', 'The Fiend', 'The Great Old One'],
    subClasses: ['Archfey', 'Fiend', 'Great Old One'],
    subClassStart: 1
  }


const wizard = {
    className: 'Wizard',
    hitDie: 6,
    weaponProficiencies: ['Simple'],
    armourProficiencies: [],
    primaryAttribute: 'Intelligence',
    spellCastingAttribute: 'Intelligence',
    spellCapacity: [],
    savingThrowProficiencies: ['Intelligence', 'Wisdom'],
    availableSkillProficiencies: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
    startingEquipment: ['Quarterstaff/Simple', 'Component_pouch/Arcane_focus', 'Scholars_pack/Explorers_pack'],
    recommendedStandardArray: [8, 13, 14, 15, 12, 10],
    subClassTitles: ['School of Abjuration', 'School of Conjuration', 'School of Divination', 'School of Enchantment', 'School of Evocation',
     'School of Illusion', 'School of Necromancy', 'School of Transmutation'],
    subClasses: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'],
    subClassStart: 2
  }

  export const classSeedData = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]