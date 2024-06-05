import { PrismaClient } from "@prisma/client";
import { cantripSeed } from "./seedData/cantripData";
import { classSeedData } from "./seedData/classData";
import { raceDataSeed } from "./seedData/raceData";

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

  const seedCantrips = cantripSeed.forEach(async (cantrip) => {
    const cantripSeed = await prisma.spell.create({
      data: cantrip
    })
    return cantripSeed
  })
  
  seedCantrips


  console.log(`Seed complete`)


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })