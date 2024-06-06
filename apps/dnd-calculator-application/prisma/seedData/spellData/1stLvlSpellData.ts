import { PrismaClient } from '@prisma/client'

const firstLevelSpells = [
    {
      spellName: 'Alarm',
      spellDescription: `You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range 
      that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature 
      touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. 
      You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are 
      within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a 
      hand bell for 10 seconds within 60 feet.`,
      spellLevel: 1,
      school: 'Abjuration',
      actionCastingTime: 10, 
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 4800,
      spellType: 'UTILITY',
      ritual: true,
      classes: {
        connect: [
          { className: 'Wizard' },
          { className: 'Ranger' },
        ]
      },
      areaOfEffect: [60]
    },
    {
      spellName: 'Animal Friendship',
      spellDescription: `This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range.
      It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a
      Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the
      spell ends.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'CONTROL',
      sightRequired: true,
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
          { className: 'Ranger' },
        ]
      },
      enhancement: 'targetIncrease'
    },
    {
      spellName: 'Armor of Agathys',
      spellDescription: `A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear.
      You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points,
      the creature takes 5 cold damage. At higher levels: When you cast this spell using a spell slot of 2nd level or higher, both the
      temporary hit points and the cold damage increase by 5 for each slot level above 1st.`,
      spellLevel: 1,
      school: 'Abjuration',
      enhancement: 'incrementalIncrease',
      selfCasting: true,
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      classes: {
        connect: [
          { className: 'Warlock' },
        ]
      },
      spellType: 'BUFF',
    },
    {
      spellName: 'Arms of Hadar',
      spellDescription: `You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures
      within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic
      damage and can't take reactions until its next turn. On a successful save, the creature takes half damage.`,
      spellLevel: 1,
      selfCasting: true,
      school: 'Conjuration',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Warlock' },
        ]
      },
      areaOfEffectType: 'Sphere',
      areaOfEffect: [10]
    },
    {
      spellName: 'Bane',
      spellDescription: `Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target
      that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the
      number rolled from the attack roll or saving throw.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 10,
      spellType: 'DEBUFF',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Cleric' },
        ]
      },
      targetNumber: 3,
      enhancement: 'incrementalIncrease'
    },
    {
      spellName: 'Bless',
      spellDescription: `You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before
      the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Paladin' },
        ]
      },
      targetNumber: 3,
      enhancement: 'incrementalIncrease'
    },
    {
      spellName: 'Burning Hands',
      spellDescription: `As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips.
      Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a
      successful one.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 15,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Cone',
      areaOfEffect: [15]
    },
    {
      spellName: 'Charm Person',
      spellDescription: `You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if
      you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your
      companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows
      it was charmed by you.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'CONTROL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
      sightRequired: true
    },
    {
      spellName: 'Chromatic Orb',
      spellDescription: `You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning,
      poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature
      takes 3d8 damage of the type you chose.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 90,
      components: ['V', 'S', 'M'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      enhancement: 'dieIncrease'
    },
    {
      spellName: 'Color Spray',
      spellDescription: `A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can affect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.`,
      spellLevel: 1,
      school: 'Illusion',
      actionCastingTime: 1,
      range: 15,
      components: ['V', 'S', 'M'],
      roundDuration: 0,
      spellType: 'CONTROL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Cone',
      areaOfEffect: [15],
      concentration: true
    },
    {
      spellName: 'Command',
      spellDescription: `You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 60,
      components: ['V'],
      roundDuration: 0,
      spellType: 'CONTROL',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Paladin' },
        ]
      },
      spellSave: 'Wisdom'
    },
    {
      spellName: 'Comprehend Languages',
      spellDescription: `For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Cleric' },
          { className: 'Druid' },
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Create or Destroy Water',
      spellDescription: `You either create or destroy water. Create Water: You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water: You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 0,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Druid' },
        ]
      },
      areaOfEffectType: 'Cube',
      areaOfEffect: [30]
    },
    {
      spellName: 'Cure Wounds',
      spellDescription: `A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      touchCasting: true,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'HEAL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Cleric' },
          { className: 'Druid' },
          { className: 'Paladin' },
          { className: 'Ranger' },
        ]
      },
      dieType: 8,
      spellSave: 'None'
    },
    {
      spellName: 'Detect Evil and Good',
      spellDescription: `For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Paladin' },
        ]
      },
      sightRequired: true
    },
    {
      spellName: 'Detect Magic',
      spellDescription: `For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Cleric' },
          { className: 'Druid' },
          { className: 'Paladin' },
          { className: 'Ranger' },
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
      sightRequired: true
    },
    {
      spellName: 'Detect Poison and Disease',
      spellDescription: `For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Druid' },
          { className: 'Paladin' },
          { className: 'Ranger' },
        ]
      },
      sightRequired: true
    },
    {
      spellName: 'Disguise Self',
      spellDescription: `You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.`,
      spellLevel: 1,
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
      selfCasting: true
    },
    {
      spellName: 'Divine Favor',
      spellDescription: `Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      bonusActionCasting: true,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Paladin' },
        ]
      },
      dieType: 4,
      spellSave: 'None'
    },
    {
      spellName: 'Expeditious Retreat',
      spellDescription: `This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      bonusActionCasting: true,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Faerie Fire',
      spellDescription: `Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 60,
      components: ['V'],
      roundDuration: 600,
      spellType: 'DEBUFF',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
        ]
      },
      areaOfEffectType: 'Cube',
      areaOfEffect: [20],
      concentration: true
    },
    {
      spellName: 'False Life',
      spellDescription: `Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.`,
      spellLevel: 1,
      school: 'Necromancy',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
      dieType: 4,
      dieNumber: 1,
      spellSave: 'None'
    },
    {
      spellName: 'Feather Fall',
      spellDescription: `Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 60,
      components: ['V', 'M'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Creature',
      areaOfEffect: [5],
      concentration: true
    },
    {
      spellName: 'Find Familiar',
      spellDescription: `You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.`,
      spellLevel: 1,
      school: 'Conjuration',
      actionCastingTime: 1,
      range: 10,
      components: ['V', 'S', 'M'],
      roundDuration: 0,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Wizard' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Fog Cloud',
      spellDescription: `You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.`,
      spellLevel: 1,
      school: 'Conjuration',
      actionCastingTime: 1,
      range: 120,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Druid' },
          { className: 'Ranger' },
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Sphere',
      areaOfEffect: [20],
      concentration: true
    },
    {
      spellName: 'Goodberry',
      spellDescription: `Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 0,
      spellType: 'HEAL',
      classes: {
        connect: [
          { className: 'Druid' },
          { className: 'Ranger' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Grease',
      spellDescription: `Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.`,
      spellLevel: 1,
      school: 'Conjuration',
      actionCastingTime: 1,
      range: 60,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'CONTROL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Square',
      areaOfEffect: [10],
      concentration: true
    },
    {
      spellName: 'Guiding Bolt',
      spellDescription: `A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 120,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Cleric' },
        ]
      },
      dieType: 6,
      dieNumber: 4,
      spellSave: 'None'
    },
    {
      spellName: 'Healing Word',
      spellDescription: `A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 60,
      components: ['V'],
      roundDuration: 0,
      spellType: 'HEAL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Cleric' },
          { className: 'Druid' },
        ]
      },
      dieType: 4,
      spellSave: 'None'
    },
    {
      spellName: 'Hellish Rebuke',
      spellDescription: `You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.`,
      spellLevel: 1,
      school: 'Evocation',
      reactionCasting: true,
      range: 60,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Warlock' },
        ]
      },
      dieType: 10,
      dieNumber: 2,
      spellSave: 'Dexterity'
    },
    {
      spellName: 'Heroism',
      spellDescription: `A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Paladin' },
        ]
      },
      spellSave: 'None'
    },
    {
      spellName: 'Hex',
      spellDescription: `You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.`,
      spellLevel: 1,
      school: 'Enchantment',
      bonusActionCasting: true,
      range: 90,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'DEBUFF',
      classes: {
        connect: [
          { className: 'Warlock' },
        ]
      },
      dieType: 6,
      spellSave: 'None'
    },
    {
      spellName: 'Hunter\'s Mark',
      spellDescription: `You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.`,
      spellLevel: 1,
      school: 'Divination',
      bonusActionCasting: true,
      range: 90,
      components: ['V'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Ranger' },
        ]
      },
      dieType: 6,
      spellSave: 'None'
    },
    {
      spellName: 'Identify',
      spellDescription: `You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Wizard' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Inflict Wounds',
      spellDescription: `Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.`,
      spellLevel: 1,
      school: 'Necromancy',
      actionCastingTime: 1,
      range: 5,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Cleric' },
        ]
      },
      dieType: 10,
      dieNumber: 3,
      spellSave: 'None'
    },
    {
      spellName: 'Jump',
      spellDescription: `You touch a creature. The creature's jump distance is tripled until the spell ends.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Druid' },
          { className: 'Ranger' },
          { className: 'Wizard' },
        ]
      },
      spellSave: 'None'
    },
    {
      spellName: 'Longstrider',
      spellDescription: `You touch a creature. The target's speed increases by 10 feet until the spell ends.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
          { className: 'Ranger' },
        ]
      },
      spellSave: 'None'
    },
    {
      spellName: 'Mage Armor',
      spellDescription: `You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.`,
      spellLevel: 1,
      school: 'Abjuration',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Wizard' },
        ]
      },
      selfCasting: true
    },
    {
      spellName: 'Magic Missile',
      spellDescription: `You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.`,
      spellLevel: 1,
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
      dieType: 4,
      dieNumber: 1,
      spellSave: 'None'
    },
    {
      spellName: 'Protection from Evil and Good',
      spellDescription: `Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.`,
      spellLevel: 1,
      school: 'Abjuration',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S', 'M'],
      roundDuration: 60,
      touchCasting: true,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Paladin' },
        ]
      },
      spellSave: 'None'
    },
    {
      spellName: 'Purify Food and Drink',
      spellDescription: `All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.`,
      spellLevel: 1,
      school: 'Transmutation',
      actionCastingTime: 1,
      range: 10,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Druid' },
        ]
      },
      areaOfEffectType: 'Sphere',
      areaOfEffect: [5]
    },
    {
      spellName: 'Ray of Sickness',
      spellDescription: `A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.`,
      spellLevel: 1,
      school: 'Necromancy',
      actionCastingTime: 1,
      range: 60,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      dieType: 8,
      dieNumber: 2,
      spellSave: 'Constitution'
    },
    {
      spellName: 'Sanctuary',
      spellDescription: `You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.`,
      spellLevel: 1,
      school: 'Abjuration',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Cleric' },
          { className: 'Paladin' },
        ]
      },
      spellSave: 'Wisdom'
    },
    {
      spellName: 'Shield',
      spellDescription: `An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.`,
      spellLevel: 1,
      school: 'Abjuration',
      reactionCasting: true,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Wizard' },
        ]
      },
      spellSave: 'None'
    },
    {
      spellName: 'Silent Image',
      spellDescription: `You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.`,
      spellLevel: 1,
      school: 'Illusion',
      actionCastingTime: 1,
      range: 60,
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
      areaOfEffectType: 'Cube',
      areaOfEffect: [15]
    },
    {
      spellName: 'Sleep',
      spellDescription: `This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake.`,
      spellLevel: 1,
      school: 'Enchantment',
      actionCastingTime: 1,
      range: 90,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'CONTROL',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      }
    },
    {
      spellName: 'Speak with Animals',
      spellDescription: `You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day.`,
      spellLevel: 1,
      school: 'Divination',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S'],
      roundDuration: 60,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
        ]
      },
      sightRequired: true
    },
    {
      spellName: 'Thunderwave',
      spellDescription: `A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 0,
      components: ['V', 'S'],
      roundDuration: 0,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Druid' },
          { className: 'Sorcerer' },
          { className: 'Wizard' },
        ]
      },
      areaOfEffectType: 'Cube',
      areaOfEffect: [15]
    },
    {
      spellName: 'Unseen Servant',
      spellDescription: `This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.`,
      spellLevel: 1,
      school: 'Conjuration',
      actionCastingTime: 1,
      range: 60,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'UTILITY',
      classes: {
        connect: [
          { className: 'Bard' },
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      }
    },
    {
      spellName: 'Witch Bolt',
      spellDescription: `A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically.`,
      spellLevel: 1,
      school: 'Evocation',
      actionCastingTime: 1,
      range: 30,
      components: ['V', 'S', 'M'],
      roundDuration: 600,
      spellType: 'DAMAGE',
      classes: {
        connect: [
          { className: 'Sorcerer' },
          { className: 'Warlock' },
          { className: 'Wizard' },
        ]
      },
    },
    {
      spellName: 'Wrathful Smite',
      spellDescription: `The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.`,
      spellLevel: 1,
      school: 'Evocation',
      bonusActionCasting: true,
      range: 0,
      components: ['V'],
      roundDuration: 600,
      spellType: 'BUFF',
      classes: {
        connect: [
          { className: 'Paladin' },
        ]
      },
      dieType: 6,
      spellSave: 'Wisdom'
    },
  ]