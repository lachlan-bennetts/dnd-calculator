const secondLevelSpells = [
  {
    spellName: 'Arcane Lock',
    spellDescription: `You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. 
    You and the creatures you designate when you cast this spell can open the object normally. You can also set a password 
    that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it 
    is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.`,
    spellLevel: 2,
    school: 'Abjuration',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
    connect: [
      { className: 'Wizard' },
    ]
    },
    objectAffected: 'door',
    objectAffectedSize: 'small'
  },
  {
    spellName: 'Augury',
    spellDescription: `By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other 
    divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you 
    plan to take within the next 30 minutes. The DM chooses from the following possible omens: Weal, for good results; Woe, 
    for bad results; Weal and woe, for both good and bad results; or nothing, for results that aren't especially good or bad. 
    The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of 
    additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next 
    long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM 
    makes this roll in secret.`,
    spellLevel: 2,
    school: 'Divination',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
    connect: [
      { className: 'Cleric' },
    ]
    },
    divinationTool: 'gem-inlaid sticks'
  },
  {
    spellName: 'Barkskin',
    spellDescription: `You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, 
    and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'BUFF',
    classes: {
    connect: [
      { className: 'Druid' },
      { className: 'Ranger' },
    ]
    },
    target: 'willing creature'
  },
  {
    spellName: 'Blindness/Deafness',
    spellDescription: `You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution 
    saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of 
    its turns, the target can make a Constitution saving throw. On a success, the spell ends.`,
    spellLevel: 2,
    school: 'Necromancy',
    actionCastingTime: 1,
    range: 30,
    components: ['V'],
    roundDuration: 600,
    spellType: 'CONTROL',
    classes: {
    connect: [
      { className: 'Bard' },
      { className: 'Cleric' },
      { className: 'Sorcerer' },
      { className: 'Wizard' },
    ]
    },
    target: 'one creature'
  },
  {
    spellName: 'Blur',
    spellDescription: `Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has 
    disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with 
    blindsight, or can see through illusions, as with truesight.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
  },
  {
    spellName: 'Cloud of Daggers',
    spellDescription: `You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within 
    range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn 
    there.`,
    spellLevel: 2,
    school: 'Conjuration',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 0,
    spellType: 'DAMAGE',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
    areaofEffectType: 'Cube', 
    areaOfEffect: [5],
    damageType: 'SLASHING',
  },
  {
    spellName: 'Hold Person',
    spellDescription: `Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be 
    paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, 
    the spell ends on the target.`,
    spellLevel: 2,
    school: 'Enchantment',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'CONTROL',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Cleric' },
        { className: 'Druid' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    targetType: 'HUMANOID',
    savingThrow: 'Wisdom',
  },
  {
    spellName: 'Invisibility',
    spellDescription: `A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is 
    invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Knock',
    spellDescription: `Choose an object that you can see within range. The object can be a door, a box, a chest, a set of 
    manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held 
    shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, 
    only one of them is unlocked.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 60,
    components: ['V'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    objectAffected: 'door',
  },
  {
    spellName: 'Levitate',
    spellDescription: `One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, 
    and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling 
    creature that succeeds on a Constitution saving throw is unaffected.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'one creature or loose object',
  },
  {
    spellName: 'Locate Object',
    spellDescription: `Describe or name an object that is familiar to you. You sense the direction to the object's location, as 
    long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.`,
    spellLevel: 2,
    school: 'Divination',
    actionCastingTime: 1,
    range: 1000,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Cleric' },
        { className: 'Druid' },
        { className: 'Paladin' },
        { className: 'Ranger' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Magic Mouth',
    spellDescription: `You implant a message within an object in range, a message that is uttered when a trigger condition is 
    met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, 
    which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the 
    circumstance that will trigger the spell to deliver your message.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Wizard' },
      ]
    },
    objectAffected: 'object',
  },
  {
    spellName: 'Magic Weapon',
    spellDescription: `You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus 
    to attack rolls and damage rolls.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'BUFF',
    classes: {
      connect: [
        { className: 'Paladin' },
        { className: 'Wizard' },
      ]
    },
    target: 'nonmagical weapon',
  },
  {
    spellName: 'Mirror Image',
    spellDescription: `Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move 
    with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action 
    to dismiss the illusory duplicates.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Misty Step',
    spellDescription: `Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.`,
    spellLevel: 2,
    school: 'Conjuration',
    actionCastingTime: 1,
    range: 0,
    components: ['V'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Pass without Trace',
    spellDescription: `A veil of shadows and silence radiates from you, masking you and your companions from detection. For the 
    duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and 
    can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its 
    passage.`,
    spellLevel: 2,
    school: 'Abjuration',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Druid' },
        { className: 'Ranger' },
      ]
    },
  },
  {
    spellName: 'Phantasmal Force',
    spellDescription: `You craft an illusion that takes root in the mind of a creature that you can see within range. The target 
    must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible 
    phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. 
    This spell has no effect on undead or constructs.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'CONTROL',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'one creature',
    },
    {
    spellName: 'Scorching Ray',
    spellDescription: `You create three rays of fire and hurl them at targets within range. You can hurl them at one target or 
    several.`,
    spellLevel: 2,
    school: 'Evocation',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S'],
    roundDuration: 0,
    spellType: 'DAMAGE',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'one or more creatures',
  },
  {
    spellName: 'Shatter',
    spellDescription: `You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose 
    either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving 
    throw. On a success, the spell has no effect.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'creature or object',
  },
  {
    spellName: 'Hold Person',
    spellDescription: `Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be 
    paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, 
    the spell ends on the target.`,
    spellLevel: 2,
    school: 'Enchantment',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'CONTROL',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Cleric' },
        { className: 'Druid' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'humanoid',
  },
  {
    spellName: 'Invisibility',
    spellDescription: `A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is 
    invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Knock',
    spellDescription: `Choose an object that you can see within range. The object can be a door, a box, a chest, a set of 
    manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held 
    shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, 
    only one of them is unlocked.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 60,
    components: ['V'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    objectAffected: 'door',
  },
  {
    spellName: 'Levitate',
    spellDescription: `One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, 
    and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling 
    creature that succeeds on a Constitution saving throw is unaffected.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'one creature or loose object',
  },
  {
    spellName: 'Locate Object',
    spellDescription: `Describe or name an object that is familiar to you. You sense the direction to the object's location, as 
    long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.`,
    spellLevel: 2,
    school: 'Divination',
    actionCastingTime: 1,
    range: 1000,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Cleric' },
        { className: 'Druid' },
        { className: 'Paladin' },
        { className: 'Ranger' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Magic Mouth',
    spellDescription: `You implant a message within an object in range, a message that is uttered when a trigger condition is 
    met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, 
    which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the 
    circumstance that will trigger the spell to deliver your message.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Wizard' },
      ]
    },
    objectAffected: 'object',
  },
  {
    spellName: 'Magic Weapon',
    spellDescription: `You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus 
    to attack rolls and damage rolls.`,
    spellLevel: 2,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'BUFF',
    classes: {
      connect: [
        { className: 'Paladin' },
        { className: 'Wizard' },
      ]
    },
    target: 'nonmagical weapon',
  },
  {
    spellName: 'Mirror Image',
    spellDescription: `Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move 
    with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action 
    to dismiss the illusory duplicates.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 0,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Misty Step',
    spellDescription: `Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.`,
    spellLevel: 2,
    school: 'Conjuration',
    actionCastingTime: 1,
    range: 0,
    components: ['V'],
    roundDuration: 0,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
  },
  {
    spellName: 'Pass without Trace',
    spellDescription: `A veil of shadows and silence radiates from you, masking you and your companions from detection. For the 
    duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and 
    can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its 
    passage.`,
    spellLevel: 2,
    school: 'Abjuration',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'UTILITY',
    classes: {
      connect: [
        { className: 'Druid' },
        { className: 'Ranger' },
      ]
    },
  },
  {
    spellName: 'Phantasmal Force',
    spellDescription: `You craft an illusion that takes root in the mind of a creature that you can see within range. The target 
    must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible 
    phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. 
    This spell has no effect on undead or constructs.`,
    spellLevel: 2,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S', 'M'],
    roundDuration: 600,
    spellType: 'CONTROL',
    classes: {
      connect: [
        { className: 'Bard' },
        { className: 'Sorcerer' },
        { className: 'Wizard' },
      ]
    },
    target: 'one creature',
  },
  {
    spellName: 'Ray of Enfeeblement',
    spellDescription: `A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged 
    spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until 
    the spell ends.`,
    spellLevel: 2,
    school: 'Necromancy',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S'],
    roundDuration: 600,
    spellType: 'DEBUFF',
    classes: {
      connect: [
        { className: 'Sorcerer' },
        { className: 'Warlock' },
        { className: 'Wizard' },
      ]
    },
    target: 'creature',
  },
]