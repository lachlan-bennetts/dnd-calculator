const barbarianFeatures = [
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
},
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

const bardFeatures = [
{
  className: 'Bard',
  featureName: 'Bardic Inspiration',
  featureDescription: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you.
  That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.
  The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled,
  it is lost. A creature can have only one Bardic Inspiration die at a time.`,
  featureLevel: 1,
},
{
  className: 'Bard',
  featureName: 'Spellcasting',
  featureDescription: `You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. 
  Your spells are part of your vast repertoire, magic that you can tune to different situations.`,
  featureLevel: 1,
},
{
  className: 'Bard',
  featureName: 'Jack of All Trades',
  featureDescription: `Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.`,
  featureLevel: 2,
},
{
  className: 'Bard',
  featureName: 'Song of Rest',
  featureDescription: `Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. 
  If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.`,
  featureLevel: 2,
},
{
  className: 'Bard',
  featureName: 'Bard College',
  featureDescription: `At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, 
  both detailed at the end of the class description `,
  featureLevel: 3,
},
{
  className: 'Bard',
  featureName: 'Expertise',
  featureDescription: `At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.`,
  featureLevel: 3,
},
{
  className: 'Bard',
  featureName: 'Ability Score Improvement',
  featureDescription: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.`,
  featureLevel: 4,
},
{
  className: 'Bard',
  featureName: 'Font of Inspiration',
  featureDescription: `Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.`,
  featureLevel: 5,
},
{
  className: 'Bard',
  featureName: 'Countercharm',
  featureDescription: `At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn.
  During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).`,
  featureLevel: 6,
},
{
  className: 'Bard',
  featureName: 'Magical Secrets',
  featureDescription: `By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.`,
  featureLevel: 10,
},
{
  className: 'Bard',
  featureName: 'Superior Inspiration',
  featureDescription: `At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.`,
  featureLevel: 20,
},
{
  className: 'Bard',
  subclass: 'Lore',
  featureName: 'Cutting Words',
  featureDescription: `Starting at 3rd level, when a creature that you can see within 60 feet of you makes an attack roll, an ability check, 
  or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting 
  the number rolled from the creature's roll.`,
  featureLevel: 3,
},
{
  className: 'Bard',
  subclass: 'Lore',
  featureName: 'Bonus Proficiencies',
  featureDescription: `At 3rd level, you gain proficiency with three skills of your choice.`,
  featureLevel: 3,
},
{
  className: 'Bard',
  subclass: 'Lore',
  featureName: 'Additional Magical Secrets',
  featureDescription: `At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`,
  featureLevel: 6,
},
{
  className: 'Bard',
  subclass: 'Lore',
  featureName: 'Peerless Skill',
  featureDescription: `Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.`,
  featureLevel: 14,
},
{
  className: 'Bard',
  subclass: 'Valor',
  featureName: 'Combat Inspiration',
  featureDescription: `At 3rd level, when an attack roll is made against you, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and adding the number rolled to your AC against that attack, potentially turning a hit into a miss.`,
  featureLevel: 3,
},
{
  className: 'Bard',
  subclass: 'Valor',
  featureName: 'Extra Attack',
  featureDescription: `Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
  featureLevel: 6,
},
{
  className: 'Bard',
  subclass: 'Valor',
  featureName: 'Battle Magic',
  featureDescription: `At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.`,
  featureLevel: 14,
}
]

const clericFeatures = [
{
  className: 'Cleric',
  featureName: 'Spellcasting',
  featureDescription: `As a conduit for divine power, you can cast cleric spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the cleric spell list.`,
  featureLevel: 1,
},
{
  className: 'Cleric',
  featureName: 'Divine Domain',
  featureDescription: `Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Each domain is detailed at the end of the class description
  and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level.`,
  featureLevel: 1,
},
{
  className: 'Cleric',
  featureName: 'Channel Divinity',
  featureDescription: `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects.`,
  featureLevel: 2,
},
{
  className: 'Cleric',
  featureName: 'Turn Undead',
  featureDescription: `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 
  feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.`,
  featureLevel: 2,
},
{
  className: 'Cleric',
  featureName: 'Destroy Undead',
  featureDescription: `Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed 
  if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.`,
  featureLevel: 5,
},
{
  className: 'Cleric',
  featureName: 'Divine Intervention',
  featureDescription: `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. Imploring your deity's aid 
  requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, 
  your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.`,
  featureLevel: 10,
},
{
  className: 'Cleric',
  featureName: 'Destroy Undead (CR 1/2)',
  featureDescription: `When an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its 
  challenge rating is at or below 1/2.`,
  featureLevel: 5,
},
{
  className: 'Cleric',
  featureName: 'Destroy Undead (CR 2)',
  featureDescription: `When an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its 
  challenge rating is at or below 2.`,
  featureLevel: 8,
},
{
  className: 'Cleric',
  featureName: 'Destroy Undead (CR 3)',
  featureDescription: `Beginning at 14th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its 
  challenge rating is at or below 3.`,
  featureLevel: 14,
},
{
  className: 'Cleric',
  subclass: 'Life',
  featureName: '1st Level Spells',
  featureDescription: `As a life cleric you have access to the spells bless and cure wounds!`,
  featureLevel: 1,
},
{
  className: 'Cleric',
  featureName: 'Divine Strike',
  featureDescription: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack,
  you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
  featureLevel: 8,
  subclass: 'Life'
},
{
  className: 'Cleric',
  featureName: 'Blessed Healing',
  featureDescription: `Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a 
  creature other than you, you regain hit points equal to 2 + the spell's level.`,
  featureLevel: 6,
  subclass: 'Life'
}
]

const druidFeatures = [
{
  className: 'Druid',
  featureName: 'Druidic',
  featureDescription: `You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. 
  Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.`,
  featureLevel: 1,
},
{
  className: 'Druid',
  featureName: 'Spellcasting',
  featureDescription: `Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See chapter 10 for the general rules of spellcasting and chapter 11 for the druid spell list.`,
  featureLevel: 1,
},
{
  className: 'Druid',
  featureName: 'Wild Shape',
  featureDescription: `Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.`,
  featureLevel: 2,
},
{
  className: 'Druid',
  featureName: 'Druid Circle',
  featureDescription: `At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th levels.`,
  featureLevel: 2,
},
{
  className: 'Druid',
  featureName: 'Wild Shape Improvement',
  featureDescription: `At 4th level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.`,
  featureLevel: 4,
},
{
  className: 'Druid',
  featureName: 'Wild Shape Improvement',
  featureDescription: `At 8th level, you can use your Wild Shape to transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.`,
  featureLevel: 8,
},
{
  className: 'Druid',
  featureName: 'Archdruid',
  featureDescription: `At 20th level, you can use your Wild Shape an unlimited number of times.`,
  featureLevel: 20,
},
{
  className: 'Druid',
  featureName: 'Timeless Body',
  featureDescription: `Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.`,
  featureLevel: 18,
},
{
  className: 'Druid',
  subclass: 'Land',
  featureName: 'Bonus Cantrip',
  featureDescription: `You learn one additional druid cantrip of your choice.`,
  featureLevel: 2,
},
{
  className: 'Druid',
  subclass: 'Land',
  featureName: 'Natural Recovery',
  featureDescription: `Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, 
  you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none 
  of the slots can be 6th level or higher.`,
  featureLevel: 2,
},
{
  className: 'Druid',
  subclass: 'Land',
  featureName: `Land's Stride`,
  featureDescription: `Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.`,
  featureLevel: 6,
},
{
  className: 'Druid',
  subclass: `Land`,
  featureName: `Nature's Ward`,
  featureDescription: `When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.`,
  featureLevel: 10,
},
{
  className: 'Druid',
  subclass: 'Land',
  featureName: `Nature's Sanctuary`,
  featureDescription: `When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.`,
  featureLevel: 14,
}
]

const fighterFeatures = [
{
  className: 'Fighter',
  featureName: 'Fighting Style',
  featureDescription: `You adopt a particular style of fighting as your specialty. Choose one of the following options. 
  You can't take a Fighting Style option more than once, even if you later get to choose again.`,
  featureLevel: 1,
},
{
  className: 'Fighter',
  featureName: 'Second Wind',
  featureDescription: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, 
  you can use a bonus action to regain hit points equal to 1d10 + your fighter level.`,
  featureLevel: 1,
},
{
  className: 'Fighter',
  featureName: 'Action Surge',
  featureDescription: `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, 
  you can take one additional action on top of your regular action and a possible bonus action.`,
  featureLevel: 2,
},
{
  className: 'Fighter',
  featureName: 'Martial Archetype',
  featureDescription: `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. 
  Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description`,
  featureLevel: 3,
},
{
  className: 'Fighter',
  featureName: 'Extra Attack',
  featureDescription: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
  featureLevel: 5,
},
{
  className: 'Fighter',
  featureName: 'Indomitable',
  featureDescription: `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.`,
  featureLevel: 9,
},
{
  className: 'Fighter',
  featureName: 'Extra Attack (2)',
  featureDescription: `Beginning at 11th level, you can attack three times, instead of twice, whenever you take the Attack action on your turn.`,
  featureLevel: 11,
},
{
  className: 'Fighter',
  featureName: 'Indomitable (2)',
  featureDescription: `Beginning at 13th level, you can use Indomitable twice between long rests.`,
  featureLevel: 13,
},
{
  className: 'Fighter',
  featureName: 'Superior Critical',
  featureDescription: `Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.`,
  featureLevel: 15,
},
{
  className: 'Fighter',
  featureName: 'Survivor',
  featureDescription: `At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.`,
  featureLevel: 18,
},
{
  className: 'Fighter',
  featureName: 'Extra Attack',
  featureDescription: `You can attack four times, instead of three, whenever you take the Attack action on your turn.`,
  featureLevel: 20,
},
{
  className: 'Fighter',
  subclass: 'Champion',
  featureName: 'Improved Critical',
  featureDescription: `Your weapon attacks score a critical hit on a roll of 19 or 20.`,
  featureLevel: 3,
},
{
  className: 'Fighter',
  subclass: 'Champion',
  featureName: 'Remarkable Athlete',
  featureDescription: `Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or 
  Constitution check you make that doesn't already use your proficiency bonus.`,
  featureLevel: 7,
},
{
  className: 'Fighter',
  subclass: 'Champion',
  featureName: 'Additional Fighting Style',
  featureDescription: `At 10th level, you can choose a second option from the Fighting Style class feature.`,
  featureLevel: 10,
},
{
  className: 'Fighter',
  subclass: 'Champion',
  featureName: 'Superior Critical',
  featureDescription: `Your weapon attacks score a critical hit on a roll of 18-20.`,
  featureLevel: 15,
},
{
  className: 'Fighter',
  subclass: 'Champion',
  featureName: 'Survivor',
  featureDescription: `At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.`,
  featureLevel: 18,
},
{
  className: 'Fighter',
  subclass: 'Battle Master',
  featureName: 'Combat Superiority',
  featureDescription: `When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.`,
  featureLevel: 3,
},
{
  className: 'Fighter',
  subclass: 'Battle Master',
  featureName: 'Student of War',
  featureDescription: `At 3rd level, you gain proficiency with one type of artisan's tools of your choice.`,
  featureLevel: 3,
},
{
  className: 'Fighter',
  subclass: 'Battle Master',
  featureName: 'Know Your Enemy',
  featureDescription: `Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own.`,
  featureLevel: 7,
},
{
  className: 'Fighter',
  subclass: 'Battle Master',
  featureName: 'Improved Combat Superiority',
  featureDescription: `At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.`,
  featureLevel: 10,
},
]


const monkFeatures = [
{
  className: 'Monk',
  featureName: 'Unarmored Defense',
  featureDescription: `Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
  featureLevel: 1,
},
{
  className: 'Monk',
  featureName: 'Martial Arts',
  featureDescription: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.`,
  featureLevel: 1,
},
{
  className: 'Monk',
  featureName: 'Ki',
  featureDescription: `Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.`,
  featureLevel: 2,
},
{
  className: 'Monk',
  featureName: 'Unarmored Movement',
  featureDescription: `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.`,
  featureLevel: 2,
},
{
  className: 'Monk',
  featureName: 'Deflect Missiles',
  featureDescription: `Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.`,
  featureLevel: 3,
},
{
  className: 'Monk',
  featureName: 'Monastic Tradition',
  featureDescription: `When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description.`,
  featureLevel: 3,
},
{
  className: 'Monk',
  featureName: 'Slow Fall',
  featureDescription: `Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`,
  featureLevel: 4,
},
{
  className: 'Monk',
  featureName: 'Stunning Strike',
  featureDescription: `Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`,
  featureLevel: 5,
},
{
  className: 'Monk',
  featureName: 'Ki-Empowered Strikes',
  featureDescription: `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
  featureLevel: 6,
},
{
  className: 'Monk',
  featureName: 'Evasion',
  featureDescription: `At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
  featureLevel: 7,
},
{
  className: 'Monk',
  featureName: 'Stillness of Mind',
  featureDescription: `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.`,
  featureLevel: 7,
},
{
  className: 'Monk',
  featureName: 'Purity of Body',
  featureDescription: `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.`,
  featureLevel: 10,
},
{
  className: 'Monk',
  featureName: 'Tongue of the Sun and Moon',
  featureDescription: `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`,
  featureLevel: 13,
},
{
  className: 'Monk',
  featureName: 'Diamond Soul',
  featureDescription: `Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
  featureLevel: 14,
},
{
  className: 'Monk',
  featureName: 'Timeless Body',
  featureDescription: `At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically You can still die of old age, however. In addition, you no longer need food or water.`,
  featureLevel: 15,
},
{
  className: 'Monk',
  featureName: 'Empty Body',
  featureDescription: `Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.`,
  featureLevel: 18,
},
{
  className: 'Monk',
  featureName: 'Perfect Self',
  featureDescription: `At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.`,
  featureLevel: 20,
},
{
  className: 'Monk',
  subclass: 'Open Hand',
  featureName: 'Open Hand Technique',
  featureDescription: `Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. 
  Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target: 
  It must succeed on a Dexterity saving throw or be knocked prone, It must make a Strength saving throw. If it fails, you can push it up to 15 feet 
  away from you, It can't take reactions until the end of your next turn.`,
  featureLevel: 3,
},
{
  className: 'Monk',
  subclass: 'Open Hand',
  featureName: 'Wholeness of Body',
  featureDescription: `At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level.`,
  featureLevel: 6,
},
{
  className: 'Monk',
  subclass: 'Open Hand',
  featureName: 'Tranquility',
  featureDescription: `You can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain 
  the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 
  8 + your Wisdom modifier + your proficiency bonus.`,
  featureLevel: 11,
},
{
  className: 'Monk',
  featureName: 'Quivering Palm',
  featureDescription: `You can set up vibrations within the body of another creature that can thereafter be fatal if you choose. 
  When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which 
  last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. 
  To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a 
  Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.`,
  featureLevel: 17,
}
]

const paladinFeatures = [
  {
    className: 'Paladin',
    featureName: 'Divine Sense',
    featureDescription: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears.
    As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead 
    within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. 
    Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.`,
    featureLevel: 1,
  },
  {
    className: 'Paladin',
    featureName: 'Lay on Hands',
    featureDescription: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total
    number of hit points equal to your paladin level x 5.`,
    featureLevel: 1,
  },
  {
    className: 'Paladin',
    featureName: 'Fighting Style',
    featureDescription: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, 
    even if you later get to choose again.`,
    featureLevel: 2,
  },
  {
    className: 'Paladin',
    featureName: 'Divine Smite',
    featureDescription: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, 
    in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.`,
    featureLevel: 2,
  },
  {
    className: 'Paladin',
    featureName: 'Divine Health',
    featureDescription: `By 3rd level, the divine magic flowing through you makes you immune to disease.`,
    featureLevel: 3,
  },
  {
    className: 'Paladin',
    featureName: 'Sacred Oath',
    featureDescription: `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level.`,
    featureLevel: 3,
  },
  {
    className: 'Paladin',
    featureName: 'Aura of Protection',
    featureDescription: `Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.`,
    featureLevel: 6,
  },
  {
    className: 'Paladin',
    featureName: 'Aura of Courage',
    featureDescription: `Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.`,
    featureLevel: 10,
  },
  {
    className: 'Paladin',
    featureName: 'Improved Divine Smite',
    featureDescription: `By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a 
    creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`,
    featureLevel: 11,
  },
  {
    className: 'Paladin',
    featureName: 'Cleansing Touch',
    featureDescription: `Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.`,
    featureLevel: 14,
  },
  {
    className: 'Paladin',
    featureName: 'Aura of Protection (2)',
    featureDescription: `Starting at 18th level, the range of this aura increases to 30 feet.`,
    featureLevel: 18,
  },
  {
    className: 'Paladin',
    featureName: 'Holy Nimbus',
    featureDescription: `At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.`,
    featureLevel: 20,
  },
  {
    className: 'Paladin',
    subclass: 'Devotion',
    featureName: 'Sacred Weapon',
    featureDescription: `As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.`,
    featureLevel: 3,
  },
  {
    className: 'Paladin',
    subclass: 'Devotion',
    featureName: 'Turn the Unholy',
    featureDescription: `As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.`,
    featureLevel: 3,
  },
  {
    className: 'Paladin',
    subclass: 'Devotion',
    featureName: 'Aura of Devotion',
    featureDescription: `Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.`,
    featureLevel: 7,
  },
  {
    className: 'Paladin',
    subclass: 'Devotion',
    featureName: 'Purity of Spirit',
    featureDescription: `At 15th level, you are always under the effects of a protection from evil and good spell.`,
    featureLevel: 15,
  },
]

const rogueFeatures = [
  {
    className: 'Rogue',
    featureName: 'Expertise I',
    featureDescription: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools.
    Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.`,
    featureLevel: 1,
  },
  {
    className: 'Rogue',
    featureName: 'Sneak Attack',
    featureDescription: `Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll.
    The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.`,
    featureLevel: 1,
  },
  {
    className: 'Rogue',
    featureName: 'Thieves Cant',
    featureDescription: `During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages.`,
    featureLevel: 1,
  },
  {
    className: 'Rogue',
    featureName: 'Cunning Action',
    featureDescription: `Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`,
    featureLevel: 2,
  },
  {
    className: 'Rogue',
    featureName: 'Roguish Archetype',
    featureDescription: `At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster, all detailed at the end of the class description.`,
    featureLevel: 3,
  },
  {
    className: 'Rogue',
    featureName: 'Ability Score Improvement',
    featureDescription: `When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.`,
    featureLevel: 4,
  },
  {
    className: 'Rogue',
    featureName: 'Uncanny Dodge',
    featureDescription: `Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
    featureLevel: 5,
  },
  {
    className: 'Rogue',
    featureName: 'Expertise II',
    featureDescription: `You can choose two more of your proficiencies (in skills or with thieves' tools) to gain the benefits of Expertise.`,
    featureLevel: 6,
  },
  {
    className: 'Rogue',
    subclass: 'Thief',
    featureName: 'Fast Hands',
    featureDescription: `Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) 
    check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.`,
    featureLevel: 3,
  },
  {
    className: 'Rogue',
    subclass: 'Thief',
    featureName: 'Second-Story Work',
    featureDescription: `When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement. 
    In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.`,
    featureLevel: 3,
  },
  {
    className: 'Rogue',
    subclass: 'Thief',
    featureName: 'Supreme Sneak',
    featureDescription: `Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.`,
    featureLevel: 9,
  },
  {
    className: 'Rogue',
    subclass: 'Thief',
    featureName: 'Use Magic Device',
    featureDescription: `By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. 
    You ignore all class and level requirements on the use of magic items.`,
    featureLevel: 13,
  },
  {
    className: 'Rogue',
    subclass: 'Thief',
    featureName: `Thief's Reflexes`,
    featureDescription: `When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat.
    You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.`,
    featureLevel: 17,
  }
]

const rangerFeatures = [
  {
    className: 'Ranger',
    featureName: 'Favored Enemy',
    featureDescription: `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. 
    Choose a type of favored enemy: beasts, fey, humanoids, monstrosities, or undead. You gain a +2 bonus to damage rolls with weapon attacks against creatures 
    of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.`,
    featureLevel: 1,
  },
  {
    className: 'Ranger',
    featureName: 'Natural Explorer',
    featureDescription: `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one 
    type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to 
    your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.`,
    featureLevel: 1,
  },
  {
    className: 'Ranger',
    featureName: 'Fighting Style',
    featureDescription: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more 
    than once, even if you later get to choose again.`,
    featureLevel: 2,
  },
  {
    className: 'Ranger',
    featureName: 'Spellcasting',
    featureDescription: `By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for 
    the general rules of spellcasting and chapter 11 for the ranger spell list.`,
    featureLevel: 2,
  },
  {
    className: 'Ranger',
    featureName: 'Primeval Awareness',
    featureDescription: `Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per 
    level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your 
    favored terrain): aberrations, celestials, dragons elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.`,
    featureLevel: 3,
  },
  {
    className: 'Ranger',
    featureName: 'Ranger Archetype',
    featureDescription: `At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your 
    choice grants you features at 3rd level and again at 7th, 11th, and 15th level.`,
    featureLevel: 3,
  },
  {
    className: 'Ranger',
    featureName: `Land's Stride`,
    featureDescription: `Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without 
    being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.`,
    featureLevel: 8,
  },
  {
    className: 'Ranger',
    featureName: 'Hide in Plain Sight',
    featureDescription: `Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other 
    naturally occurring materials with which to create your camouflage.`,
    featureLevel: 10,
  },
  {
    className: 'Ranger',
    featureName: 'Vanish',
    featureDescription: `Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.`,
    featureLevel: 14,
  },
  {
    className: 'Ranger',
    featureName: 'Feral Senses',
    featureDescription: `At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.`,
    featureLevel: 18,
  },
  {
    className: 'Ranger',
    featureName: 'Foe Slayer',
    featureDescription: `At 20th level, you become an unparalleled hunter. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make.`,
    featureLevel: 20,
  },
  {
    className: 'Ranger',
    subclass: 'Hunter',
    featureName: `Hunter's Prey`,
    featureDescription: `At 3rd level, you gain one of the following features of your choice.`,
    featureLevel: 3,
  },
  {
    className: 'Ranger',
    subclass: 'Hunter',
    featureName: `Defensive Tactics`,
    featureDescription: `At 7th level, you gain one of the following features of your choice.`,
    featureLevel: 7,
  },
  {
    className: 'Ranger',
    subclass: 'Hunter',
    featureName: `Multiattack`,
    featureDescription: `At 11th level, you gain one of the following features of your choice.`,
    featureLevel: 11,
  },
  {
    className: 'Ranger',
    subclass: 'Hunter',
    featureName: `Superior Hunter's Defense`,
    featureDescription: `At 15th level, you gain one of the following features of your choice.`,
    featureLevel: 15,
  },
  {
    className: 'Ranger',
    subclass: 'Beast Master',
    featureName: `Ranger's Companion`,
    featureDescription: `At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. 
    Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower.`,
    featureLevel: 3,
  },
  {
    className: 'Ranger',
    subclass: 'Beast Master',
    featureName: `Exceptional Training`,
    featureDescription: `Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the 
    beast to take the Dash, Disengage, Dodge, or Help action on its turn.`,
    featureLevel: 7,
  },
  {
    className: 'Ranger',
    subclass: 'Beast Master',
    featureName: `Bestial Fury`,
    featureDescription: `Starting at 11th level, your beast companion can make two attacks when you command it to use the Attack action.`,
    featureLevel: 11,
  },
  {
    className: 'Ranger',
    subclass: 'Beast Master',
    featureName: `Share Spells`,
    featureDescription: `Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the 
    beast is within 30 feet of you.`,
    featureLevel: 15,
  }
]

const sorcerFeatures = [
  {
    className: 'Sorcerer',
    featureName: 'Sorcerous Origin',
    featureDescription: `Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at 
    the end of the class description. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    featureName: 'Spellcasting',
    featureDescription: `An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of 
    magic, whatever its origin, fuels your spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the sorcerer spell list.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    featureName: 'Sorcerous Origin Feature',
    featureDescription: `At 1st level, you choose a sorcerous origin, which determines your origin, detailed at the end of the class description (Draconic Bloodline or 
    Wild Magic). Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    featureName: 'Font of Magic',
    featureDescription: `At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to 
    create a variety of magical effects.`,
    featureLevel: 2,
  },
  {
    className: 'Sorcerer',
    featureName: 'Metamagic',
    featureDescription: `At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. 
    You gain another one at 10th and 17th level.`,
    featureLevel: 3,
  },
  {
    className: 'Sorcerer',
    featureName: 'Sorcerous Restoration',
    featureDescription: `At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.`,
    featureLevel: 20,
  },
  {
    className: 'Sorcerer',
    subclass: 'Draconic Bloodline',
    featureName: `Draconic Resilience`,
    featureDescription: `At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    subclass: 'Draconic Bloodline',
    featureName: `Elemental Affinity`,
    featureDescription: `Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.`,
    featureLevel: 6,
  },
  {
    className: 'Sorcerer',
    subclass: 'Draconic Bloodline',
    featureName: `Dragon Wings`,
    featureDescription: `At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. 
    You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.`,
    featureLevel: 14,
  },
  {
    className: 'Sorcerer',
    subclass: 'Draconic Bloodline',
    featureName: `Dragon Soul`,
    featureDescription: `At 18th level, you gain immunity to the damage type associated with your draconic ancestry.`,
    featureLevel: 18,
  },
  {
    className: 'Sorcerer',
    subclass: 'Wild Magic',
    featureName: `Wild Magic Surge`,
    featureDescription: `Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you 
    cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    subclass: 'Wild Magic',
    featureName: `Tides of Chaos`,
    featureDescription: `Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or 
    saving throw. Once you do so, you must finish a long rest before you can use this feature again.`,
    featureLevel: 1,
  },
  {
    className: 'Sorcerer',
    subclass: 'Wild Magic',
    featureName: `Bend Luck`,
    featureDescription: `Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, 
    an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty 
    (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.`,
    featureLevel: 6,
  },
  {
    className: 'Sorcerer',
    subclass: 'Wild Magic',
    featureName: `Controlled Chaos`,
    featureDescription: `At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.`,
    featureLevel: 14,
  },
]

const warlockFeatures = [
  {
    className: 'Warlock',
    featureName: 'Otherworldly Patron',
    featureDescription: `At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, 
    each of which is detailed at the end of the class description (your choice grants you features at 1st level and again at 6th, 10th, and 14th level).`,
    featureLevel: 1,
  },
  {
    className: 'Warlock',
    featureName: 'Pact Magic',
    featureDescription: `Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the warlock spell list.`,
    featureLevel: 1,
  },
  {
    className: 'Warlock',
    featureName: 'Eldritch Invocations',
    featureDescription: `In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. 
    At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description (your choice grants you features at 2nd 
    level and again at 5th, 7th, 9th, 12th, 15th, and 18th level).`,
    featureLevel: 2,
  },
  {
    className: 'Warlock',
    featureName: 'Pact Boon',
    featureDescription: `At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.`,
    featureLevel: 3,
  },
  {
    className: 'Warlock',
    featureName: 'Mystic Arcanum',
    featureDescription: `At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.`,
    featureLevel: 11,
  },
  {
    className: 'Warlock',
    featureName: 'Eldritch Master',
    featureDescription: `At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.`,
    featureLevel: 20,
  },
  {
    className: 'Warlock',
    subclass: 'Archfey',
    featureName: `Fey Presence`,
    featureDescription: `Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, 
    you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail 
    their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.`,
    featureLevel: 1,
  },
  {
    className: 'Warlock',
    subclass: 'Archfey',
    featureName: `Misty Escape`,
    featureDescription: `Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible 
    and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.`,
    featureLevel: 6,
  },
  {
    className: 'Warlock',
    subclass: 'Archfey',
    featureName: `Dark Delirium`,
    featureDescription: `Starting at 10th level, you can use your action to touch a creature, targeting one humanoid or beast. The target must make a Wisdom saving throw 
    against your warlock spell save DC. On a failed save, the target is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as 
    if you were concentrating on a spell).`,
    featureLevel: 10,
  },
]

const wizardFeatures = [
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
  },
  {
    className: 'Wizard',
    featureName: 'Spell Mastery',
    featureDescription: `You have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell 
    that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either
    spell at a higher level, you must expend a spell slot as normal.`,
    featureLevel: 18
  },
  {
    className: 'Wizard',
    featureName: 'Signature Spells',
    featureDescription: `When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in 
    your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each 
    of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.`,
    featureLevel: 20
  },
  {
    className: 'Wizard',
    subclass: 'Evocation',
    featureName: 'Evocation Savant',
    featureDescription: 'The gold and time you must spend to copy an evocation spell into your spellbook is halved.',
    featureLevel: 2
  },
  {
    className: 'Wizard',
    subclass: 'Evocation',
    featureName: 'Sculpt Spells',
    featureDescription: `Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell
    that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving
    throws against the spell, and they take no damage if they would normally take half damage on a successful save.`,
    featureLevel: 2,
  },
  {
    className: 'Wizard',
    subclass: 'Evocation',
    featureName: 'Potent Cantrip',
    featureDescription: `Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw
    against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.`,
    featureLevel: 6,
  },
  {
    className: 'Wizard',
    subclass: 'Evocation',
    featureName: 'Empowered Evocation',
    featureDescription: `Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.`,
    featureLevel: 10,
  },
  {
    className: 'Wizard',
    subclass: 'Evocation',
    featureName: 'Overchannel',
    featureDescription: `Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage,
    you can deal maximum damage with that spell.`,
    featureLevel: 14,
  },
]

export const classFeaturesSeed = [
  ...barbarianFeatures,
  ...bardFeatures,
  ...clericFeatures,
  ...druidFeatures,
  ...fighterFeatures,
  ...monkFeatures,
  ...paladinFeatures,
  ...rangerFeatures,
  ...rogueFeatures,
  ...sorcerFeatures,
  ...warlockFeatures,
  ...wizardFeatures
]