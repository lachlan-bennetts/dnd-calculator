import { Logger } from "../utils/Logger"


export const mapLearntSpells = (learntSpells, logger: Logger, correlationId: string) => {
  logger.info(`Mapping character Spells with correlationId ${correlationId}`)
  console.log(learntSpells)
  const allSpells = learntSpells.map((learntSpell) => {
    const minDamage = 1*(learntSpell.spell.damageNum)
    const maxDamage = (learntSpell.spell.damageNum)*(learntSpell.spell.damageDieType)
    const minMax = `${minDamage}-${maxDamage}`
    return {
      spellId: learntSpell.spellId,
      spellName: learntSpell.spell.name,
      spellClass: learntSpell.spell.className,
      spellDescription: learntSpell.spell.description,
      spellLevel: learntSpell.spell.level,
      spellRange: learntSpell.spell.range,
      spellComponents: learntSpell.spell.components,
      spellDuration: learntSpell.spell.duration, 
      spellCastingTime: learntSpell.spell.castingTime,
      spellDamageType: learntSpell.spell.damageType,
      spellDamageDie: learntSpell.spell.damageDieType,
      spellDamageNum: learntSpell.spell.damageNum,
      spellAoe: learntSpell.spell.areaofEffect,
      minMaxDamage: minMax
    }
  })
  const activeSpells = allSpells.filter((spell) => {
    return spell.active === true
  })
  const classSpells = categoriseSpellsByClass(allSpells, logger, correlationId)


  const mappedSpells = {
    classSpells,
    activeSpells
  }
  return mappedSpells
}


const categoriseSpellsByClass = (allSpells, logger: Logger, correlationId: string) => {
  logger.info(`Categorising spells by class with correlationId ${correlationId}`)
  const spellsByClass = allSpells.reduce((acc, spell) => {
    if(!acc[spell.spellClass]) {
      acc[spell.spellClass] = []
    }
    acc[spell.spellClass].push(spell)
    return acc
  }, {})
  return spellsByClass
}
