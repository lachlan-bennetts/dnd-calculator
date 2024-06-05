export const barbarianFeatures = [
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

  // const wizardFeatures = await prisma.classFeature.createMany({
  //   data: [
  //     {
  //       className: 'Wizard',
  //       featureName: 'Spellcasting',
  //       featureDescription: 'You have learned to cast spells as a wizard, and can prepare a number of spells each day equal to your wizard level + your Intelligence modifier. ' +
  //       'You can cast these spells using your spell slots, which are determined by your level. You can also cast cantrips, which are spells that require no spell slots to cast.',
  //       featureLevel: 1
  //     },
  //     {
  //       className: 'Wizard',
  //       featureName: 'Arcane Recovery',
  //       featureDescription: 'You have learned to recover some of your magical energy by resting. Once per day when you finish a short rest, you can choose expended spell slots to recover. ' +
  //       'The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
  //       featureLevel: 1
  //     },
  //     {
  //       className: 'Wizard',
  //       featureName: 'Arcane Tradition',
  //       featureDescription: 'At 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion',
  //       featureLevel: 2
  //     }
  //   ]
  // })