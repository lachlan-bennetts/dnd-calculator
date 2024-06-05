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
    recommendedStandardArray: [15, 14, 13, 10, 12, 8]
  }


const bard = {
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


const cleric = {
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


const druid = {
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
    recommendedStandardArray: [15, 8, 14, 13, 12, 10]
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
    recommendedStandardArray: [8, 15, 13, 14, 10, 12]
  }


const paladin = {
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


const ranger = {
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
    recommendedStandardArray: [8, 15, 14, 13, 12, 10]
  };

const sorcerer = {
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


const warlock = {
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


const wizard = {
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

  export const classSeedData = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]