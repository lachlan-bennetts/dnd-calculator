const acidSplash = 
    {
      spellName: 'Acid Splash',
      spellDescription: 'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. ' +
      'A target must succeed on a Dexterity saving throw or take 1d6 acid damage.',
      spellLevel: 0,
      school: 'Conjuration',
      enhancement: 'dieIncrease',
      actionCastingTime: 1,
      range: 60,
      components: ['V', 'S'],
      targetNumber: 2,
      targetProximity: 5,
      classes: {
        connect: [
          {className: "Wizard"},
          {className: "Sorcerer"}
        ]
      },
      spellType: 'DAMAGE',
      damageType: 'ACID',
      dieType: 6,
      dieNumber: 1,
      areaOfEffect: [5]
    }


const bladeWard = 
    {
      spellName: 'Blade Ward',
      spellDescription: 'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
      spellLevel: 0,
      selfCasting: true,
      school: 'Abjuration',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S'],
      classes: {
        connect: [
          {className: "Wizard"},
          {className: "Sorcerer"},
          {className: "Bard"},
          {className: "Warlock"}
        ]
      },
      spellType: 'BUFF',
      roundDuration: 1,
    }


const chillTouch =  {
    spellName: 'Chill Touch',
    spellDescription: `You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave.
    On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.`,
    spellLevel: 0,
    enhancement: 'dieIncrease',
    school: 'Necromancy',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"},
        {className: "Warlock"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'NECROTIC',
    dieType: 8,
    dieNumber: 1
  }


const dancingLights =  {
    spellName: 'Dancing Lights',
    spellDescription: `You create up to four torch-sized lights within range, making them appear as torches, lanterns, 
    or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely 
    humanoid form of Medium size.`,
    spellLevel: 0,
    school: 'Evocation',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"},
        {className: "Bard"},
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const druidCraft =  {
    spellName: 'Druidcraft',
    spellDescription: `Whispering to the spirits of nature, you create one of the following effects within range:
    • You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the 
    next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes 
    for snow, and so on. This effect persists for 1 round.
    • You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.
    • You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal,
     or the faint odor of skunk. The effect must fit in a 5-foot cube.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Druid"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const eldritchBlast =  {
    spellName: 'Eldritch Blast',
    spellDescription: `A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target.
    On a hit, the target takes 1d10 force damage.`,
    spellLevel: 0,
    enhancement: 'targetIncrease',
    school: 'Evocation',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Warlock"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'FORCE',
    dieType: 10,
    dieNumber: 1
  }


const fireBolt =  {
    spellName: 'Fire Bolt',
    spellDescription: `You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target.
    On a hit, the target takes 1d10 fire damage.`,
    spellLevel: 0,
    enhancement: 'dieIncrease',
    school: 'Evocation',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'FIRE',
    dieType: 10,
    dieNumber: 1
  }


const friends =  {
    spellName: 'Friends',
    spellDescription: `For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you.
    When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you.
    A creature prone to violence might attack you. Another creature might seek retribution in other ways.`,
    spellLevel: 0,
    school: 'Enchantment',
    actionCastingTime: 1,
    range: 30,
    components: ['S', 'M'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"},
        {className: "Bard"},
        {className: "Warlock"}
      ]
    },
    spellType: 'BUFF',
    roundDuration: 1
  }


const guidance =  {
    spellName: 'Guidance',
    spellDescription: `You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice.
    It can roll the die before or after making the ability check. The spell then ends.`,
    spellLevel: 0,
    school: 'Divination',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Cleric"},
        {className: "Druid"}
      ]
    },
    spellType: 'BUFF',
    roundDuration: 1
  }


const light =  {
    spellName: 'Light',
    spellDescription: `You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet.
    The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.`,
    spellLevel: 0,
    school: 'Evocation',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'M'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"},
        {className: "Cleric"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const mageHand =  {
    spellName: 'Mage Hand',
    spellDescription: `A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action.
    The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.`,
    spellLevel: 0,
    school: 'Conjuration',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"},
        {className: "Bard"},
        {className: "Warlock"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const mending =  {
    spellName: 'Mending',
    spellDescription: `This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin.
    As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    classes: {
      connect: [
        {className: "Cleric"},
        {className: "Druid"},
        {className: "Wizard"},
        {className: "Bard"},
        {className: "Sorcerer"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const message =  {
    spellName: 'Message',
    spellDescription: `You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.
    You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 120,
    components: ['V', 'S', 'M'],
    classes: {
      connect: [
        {className: "Bard"},
        {className: "Wizard"},
        {className: "Sorcerer"},
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const minorIllusion =  {
    spellName: 'Minor Illusion',
    spellDescription: `You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.
    If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose.
    If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect.
    Physical interaction with the image reveals it to be an illusion, because things can pass through it.`,
    spellLevel: 0,
    school: 'Illusion',
    actionCastingTime: 1,
    range: 30,
    components: ['S', 'M'],
    classes: {
      connect: [
        {className: "Bard"},
        {className: "Sorcerer"},
        {className: "Wizard"},
        {className: "Warlock"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const poisonSpray =  {
    spellName: 'Poison Spray',
    spellDescription: `You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.`,
    spellLevel: 0,
    school: 'Conjuration',
    enhancement: 'dieIncrease',
    actionCastingTime: 1,
    range: 10,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Sorcerer"},
        {className: "Wizard"},
        {className: "Druid"},
        {className: "Warlock"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'POISON',
    dieType: 12,
    dieNumber: 1
  }


const prestidigitation =  {
    spellName: 'Prestidigitation',
    spellDescription: `This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:
    • You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.
    • You instantaneously light or snuff out a candle, a torch, or a small campfire.
    • You instantaneously clean or soil an object no larger than 1 cubic foot.
    • You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
    • You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
    • You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 10,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Bard"},
        {className: "Sorcerer"},
        {className: "Wizard"},
        {className: "Warlock"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const produceFlame =  {
    spellName: 'Produce Flame',
    spellDescription: `A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet.
    The spell ends if you dismiss it as an action or if you cast it again.`,
    spellLevel: 0,
    school: 'Conjuration',
    enhancement: 'dieIncrease',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Druid"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const rayOfFrost =  {
    spellName: 'Ray of Frost',
    spellDescription: `A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.`,
    spellLevel: 0,
    school: 'Evocation',
    enhancement: 'dieIncrease',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Wizard"},
        {className: "Sorcerer"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'COLD',
    dieType: 8,
    dieNumber: 1
  }


const resistance =  {
    spellName: 'Resistance',
    spellDescription: `You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice.
    It can roll the die before or after making the saving throw. The spell then ends.`,
    spellLevel: 0,
    touchCasting: true,
    school: 'Abjuration',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    classes: {
      connect: [
        {className: "Cleric"},
        {className: "Druid"}
      ]
    },
    spellType: 'BUFF',
    roundDuration: 1
  }


const sacredFlame =  {
    spellName: 'Sacred Flame',
    spellDescription: `Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage.
    The target gains no benefit from cover for this saving throw.`,
    spellLevel: 0,
    school: 'Evocation',
    enhancement: 'dieIncrease',
    actionCastingTime: 1,
    range: 60,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Cleric"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'RADIANT',
    dieType: 8,
    dieNumber: 1
  }


const shockingGrasp =  {
    spellName: 'Shocking Grasp',
    spellDescription: `Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal.
    On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.`,
    spellLevel: 0,
    touchCasting: true,
    enhancement: 'dieIncrease',
    school: 'Evocation',
    actionCastingTime: 1,
    range: 5,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Sorcerer"},
        {className: "Wizard"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'LIGHTNING',
    dieType: 8,
    dieNumber: 1
  }


const shillelagh =  {
    spellName: 'Shillelagh',
    spellDescription: `The wood of a club or a quarterstaff you are holding is imbued with nature's power for the duration. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 0,
    bonusActionCasting: true,
    range: 30,
    components: ['V', 'S', 'M'],
    classes: {
      connect: [
        {className: "Druid"}
      ]
    },
    spellType: 'BUFF',
    roundDuration: 1
  
  }


const spareTheDying =  {
    spellName: 'Spare the Dying',
    spellDescription: `You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.`,
    spellLevel: 0,
    school: 'Necromancy',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S'],
    classes: {
      connect: [
        {className: "Cleric"}
      ]
    },
    spellType: 'HEAL',
    roundDuration: 1
  }


const thaumaturgy =  {
    spellName: 'Thaumaturgy',
    spellDescription: `You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:
    • Your voice booms up to three times as loud as normal for 1 minute.
    • You cause flames to flicker, brighten, dim, or change color for 1 minute.
    • You cause harmless tremors in the ground for 1 minute.
    • You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.
    • You instantaneously cause an unlocked door or window to fly open or slam shut.
    • You alter the appearance of your eyes for 1 minute.`,
    spellLevel: 0,
    school: 'Transmutation',
    actionCastingTime: 1,
    range: 30,
    components: ['V'],
    classes: {
      connect: [
        {className: "Cleric"}
      ]
    },
    spellType: 'UTILITY',
    roundDuration: 1
  }


const thornWhip =  {
    spellName: 'Thorn Whip',
    spellDescription: `You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against 
    the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.`,
    spellLevel: 0,
    school: 'Transmutation',
    enhancement: 'dieIncrease',
    actionCastingTime: 1,
    range: 30,
    components: ['V', 'S', 'M'],
    classes: {
      connect: [
        {className: "Druid"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'PIERCING',
    dieType: 6,
    dieNumber: 1
  }


const trueStrike =  {
    spellName: 'True Strike',
    spellDescription: `You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, 
    you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.`,
    spellLevel: 0,
    school: 'Divination',
    actionCastingTime: 1,
    range: 30,
    components: ['S'],
    classes: {
      connect: [
        {className: "Sorcerer"},
        {className: "Wizard"},
        {className: "Bard"},
        {className: "Warlock"}
      ]
    },
    spellType: 'BUFF',
    roundDuration: 1
  }


const viciousMockery =  {
    spellName: 'Vicious Mockery',
    spellDescription: `You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), 
    it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.`,
    spellLevel: 0,
    school: 'Enchantment',
    actionCastingTime: 1,
    range: 60,
    components: ['V'],
    classes: {
      connect: [
        {className: "Bard"}
      ]
    },
    spellType: 'DAMAGE',
    damageType: 'PSYCHIC',
    dieType: 4,
    dieNumber: 1
  }


export const cantripSeed = [
  acidSplash,
  bladeWard,
  chillTouch,
  dancingLights,
  druidCraft,
  eldritchBlast,
  fireBolt,
  friends,
  guidance,
  light,
  mageHand,
  mending,
  message,
  minorIllusion,
  poisonSpray,
  prestidigitation,
  produceFlame,
  rayOfFrost,
  resistance,
  sacredFlame,
  shillelagh,
  shockingGrasp,
  spareTheDying,
  thaumaturgy,
  thornWhip,
  trueStrike,
  viciousMockery
]