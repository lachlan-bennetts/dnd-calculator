// featureAction: to be added later.

export interface RaceFeature {
  featureName: string;
  featureDescription: string;
  featureLevel: number;
  subRace: string;
  raceAction?: string;
}

const dragonbornFeatures = [
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale acidic destructive energy. The breath travels in a 1.5m x 9m line",
    featureLevel: 1,
    subRace: "Black",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale lightning in a 1.5m x 9m line",
    featureLevel: 1,
    subRace: "Blue",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale fire in a 1.5m x 9m line",
    featureLevel: 1,
    subRace: "Brass",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale lightning in a 1.5m x 9m line",
    featureLevel: 1,
    subRace: "Bronze",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale acid in a 1.5m x 9m line",
    featureLevel: 1,
    subRace: "Copper",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale fire in a 5m cone",
    featureLevel: 1,
    subRace: "Gold",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale poison in a 5m cone",
    featureLevel: 1,
    subRace: "Green",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale fire in a 5m cone",
    featureLevel: 1,
    subRace: "Red",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale cold in a 5m cone",
    featureLevel: 1,
    subRace: "Silver",
  },
  {
    featureName: "Breath Weapon",
    featureDescription: "You can use your action to exhale cold in a 5m cone",
    featureLevel: 1,
    subRace: "White",
  },
  {
    featureName: "Acid Resistance",
    featureDescription: "You have resistance to acid attacks due to your black draconic ancestry",
    featureLevel: 1,
    subRace: "Black",
  },
  {
    featureName: "Lightning Resistance",
    featureDescription: "You have resistance to lightning attacks due to your blue draconic ancestry",
    featureLevel: 1,
    subRace: "Blue",
  },
  {
    featureName: "Fire Resistance",
    featureDescription: "You have resistance to fire attacks due to your brass draconic ancestry",
    featureLevel: 1,
    subRace: "Brass",
  },
  {
    featureName: "Lightning Resistance",
    featureDescription: "You have resistance to lightning attacks due to your bronze draconic ancestry",
    featureLevel: 1,
    subRace: "Bronze",
  },
  {
    featureName: "Acid Resistance",
    featureDescription: "You have resistance to acid attacks due to your copper draconic ancestry",
    featureLevel: 1,
    subRace: "Copper",
  },
  {
    featureName: "Fire Resistance",
    featureDescription: "You have resistance to fire attacks due to your gold draconic ancestry",
    featureLevel: 1,
    subRace: "Gold",
  },
  {
    featureName: "Poison Resistance",
    featureDescription: "You have resistance to poison attacks due to your green draconic ancestry",
    featureLevel: 1,
    subRace: "Green",
  },
  {
    featureName: "Fire Resistance",
    featureDescription: "You have resistance to fire attacks due to your red draconic ancestry",
    featureLevel: 1,
    subRace: "Red",
  },
  {
    featureName: "Cold Resistance",
    featureDescription: "You have resistance to cold attacks due to your silver draconic ancestry",
    featureLevel: 1,
    subRace: "Silver",
  },
  {
    featureName: "Cold Resistance",
    featureDescription: "You have resistance to cold attacks due to your white draconic ancestry",
    featureLevel: 1,
    subRace: "White",
  },
]

const dwarfFeatures = [
  {
    featureName: "Dwarven Resilience",
    featureDescription: "You have advantage on saving throws against poison, and you have resistance against poison damage",
    featureLevel: 1,
    subRace: "Hill",
  },
  {
    featureName: "Dwarven Combat Training",
    featureDescription: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer",
    featureLevel: 1,
    subRace: "Hill",
  },
  {
    featureName: "Dwarven Toughness",
    featureDescription: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level",
    featureLevel: 1,
    subRace: "Hill",
  },
  {
    featureName: "Stonecunning",
    featureDescription: `Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered 
    proficient in the History skill and add double your proficiency bonus to the check`,
    featureLevel: 1,
    subRace: "Hill",
  },
  {
    featureName: "Dwarven Resilience",
    featureDescription: "You have advantage on saving throws against poison, and you have resistance against poison damage",
    featureLevel: 1,
    subRace: "Mountain",
  },

  {
    featureName: "Dwarven Combat Training",
    featureDescription: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer",
    featureLevel: 1,
    subRace: "Mountain",
  },
  {
    featureName: "Dwarven Armor Training",
    featureDescription: "You have proficiency with light and medium armor",
    featureLevel: 1,
    subRace: "Mountain",
  },
  {
    featureName: "Stonecunning",
    featureDescription: `Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered 
    proficient in the History skill and add double your proficiency bonus to the check`,
    featureLevel: 1,
    subRace: "Mountain",
  },
]

const elfFeatures = [
  {
    featureName: "Keen Senses",
    featureDescription: "You have proficiency in the Perception skill",
    featureLevel: 1,
    subRace: "High",
  },
  {
    featureName: "Elf Weapon Training",
    featureDescription: "You have proficiency with the longsword, shortsword, shortbow, and longbow",
    featureLevel: 1,
    subRace: "High",
  },
  {
    featureName: "Fey Ancestry",
    featureDescription: "You have advantage on saving throws against being charmed, and magic can't put you to sleep",
    featureLevel: 1,
    subRace: "High",
  },
  {
    featureName: "Trance",
    featureDescription: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day",
    featureLevel: 1,
    subRace: "High",
  },
  {
    featureName: "Extra Language",
    featureDescription: "You can speak, read, and write one extra language of your choice",
    featureLevel: 1,
    subRace: "High",
  },
  {
    featureName: "Keen Senses",
    featureDescription: "You have proficiency in the Perception skill",
    featureLevel: 1,
    subRace: "Wood",
  },
  {
    featureName: "Elf Weapon Training",
    featureDescription: "You have proficiency with the longsword, shortsword, shortbow, and longbow",
    featureLevel: 1,
    subRace: "Wood",
  },
  {
    featureName: "Fey Ancestry",
    featureDescription: "You have advantage on saving throws against being charmed, and magic can't put you to sleep",
    featureLevel: 1,
    subRace: "Wood",
  },
  {
  featureName: "Fleet of Foot",
  featureDescription: "Your base walking speed increases to 10.5m",
  featureLevel: 1,
  subRace: "Wood",
  },
  {
  featureName: "Mask of the Wild",
  featureDescription: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena",
  featureLevel: 1,
  subRace: "Wood",
  },
]

const gnomeFeatures = [
  {
    featureName: "Gnome Cunning",
    featureDescription: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic",
    featureLevel: 1,
    subRace: "Forest",
  },
  {
    featureName: "Natural Illusionist",
    featureDescription: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it",
    featureLevel: 1,
    subRace: "Forest",
  },
  {
    featureName: "Speak with Small Beasts",
    featureDescription: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts",
    featureLevel: 1,
    subRace: "Forest",
  },
  {
    featureName: "Artificer's Lore",
    featureDescription: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply",
    featureLevel: 1,
    subRace: "Rock",
  },
  {
    featureName: "Gnome Cunning",
    featureDescription: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic",
    featureLevel: 1,
    subRace: "Rock",
  },
  {
    featureName: "Tinker",
    featureDescription: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time",
    featureLevel: 1,
    subRace: "Rock",
  },
]

const halfElfFeatures = [
  {
    featureName: "Fey Ancestry",
    featureDescription: "You have advantage on saving throws against being charmed, and magic can't put you to sleep",
    featureLevel: 1,
    subRace: "None",
  },
  {
    featureName: "Skill Versatility",
    featureDescription: "You gain proficiency in two skills of your choice",
    featureLevel: 1,
    subRace: "None",
  },
  {
    featureName: "Extra Language",
    featureDescription: "You can speak, read, and write one extra language of your choice",
    featureLevel: 1,
    subRace: "None",
  },
]

const halflingFeatures = [
  {
    featureName: "Lucky",
    featureDescription: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll",
    featureLevel: 1,
    subRace: "Lightfoot",
  },
  {
    featureName: 'Halfling Nimbleness',
    featureDescription: "You can move through the space of any creature that is of a size larger than yours",
    featureLevel: 1,
    subRace: "Lightfoot",
  },
  {
    featureName: "Naturally Stealthy",
    featureDescription: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you",
    featureLevel: 1,
    subRace: "Lightfoot",
  },
  {
    featureName: "Brave",
    featureDescription: "You have advantage on saving throws against being frightened",
    featureLevel: 1,
    subRace: "Lightfoot",
  },
  {
    featureName: "Brave",
    featureDescription: "You have advantage on saving throws against being frightened",
    featureLevel: 1,
    subRace: "Stout",
  },
  {
    featureName: "Lucky",
    featureDescription: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll",
    featureLevel: 1,
    subRace: "Stout",
  },
  {
    featureName: 'Halfling Nimbleness',
    featureDescription: "You can move through the space of any creature that is of a size larger than yours",
    featureLevel: 1,
    subRace: "Stout",
  },
  {
    featureName: 'Stout Resilience',
    featureDescription: "You have advantage on saving throws against poison, and you have resistance against poison damage",
    featureLevel: 1,
    subRace: "Stout",
  }
]

const halfOrcFeatures = [
  {
    featureName: "Menacing",
    featureDescription: "You gain proficiency in the Intimidation skill",
    featureLevel: 1,
    subRace: "Half-Orc",
  },
  {
    featureName: "Relentless Endurance",
    featureDescription: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest",
    featureLevel: 1,
    subRace: "Half-Orc",
  },
  {
    featureName: "Savage Attacks",
    featureDescription: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit",
    featureLevel: 1,
    subRace: "Half-Orc",
  },
]

const humanFeatures = [
  {
    featureName: "Extra Language",
    featureDescription: "You can speak, read, and write one extra language of your choice",
    featureLevel: 1,
    subRace: "Human",
  },
  {
    featureName: "Extra Feat",
    featureDescription: "You gain one feat of your choice",
    featureLevel: 1,
    subRace: "Human",
  },
]

const tieflingFeatures = [
  {
    featureName: "Hellish Resistance",
    featureDescription: "You have resistance to fire damage",
    featureLevel: 1,
    subRace: "Asmodeus",
  },
  {
    featureName: "Infernal Legacy",
    featureDescription: `You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per 
    day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting 
    ability for these spells`,
    featureLevel: 1,
    subRace: "Asmodeus",
  },
  {
    featureName: "Infernal Legacy - Thaumaturgy",
    featureDescription: "You know the thaumaturgy cantrip, Charisma is your spellcasting ability for this cantrip",
    featureLevel: 1,
    subRace: "Asmodeus"
  },
  {
    featureName: "Infernal Legacy - Hellish Rebuke",
    featureDescription: "You can cast the hellish rebuke spell once per day as a 2nd-level spell, Charisma is your spellcasting ability for this spell",
    featureLevel: 3,
    subRace: "Asmodeus"
  },
  {
    featureName: "Infernal Legacy - Darkness",
    featureDescription: "You can cast the darkness spell once per day, Charisma is your spellcasting ability for this spell",
    featureLevel: 5,
    subRace: "Asmodeus"
  },
]

export const raceFeaturesData = [
  ...dragonbornFeatures,
  ...dwarfFeatures,
  ...elfFeatures,
  ...gnomeFeatures,
  ...halfElfFeatures,
  ...halflingFeatures,
  ...halfOrcFeatures,
  ...humanFeatures,
  ...tieflingFeatures
]