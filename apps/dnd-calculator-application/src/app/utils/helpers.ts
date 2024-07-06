import { SpellcastingClasses, spellLevelSlots } from './constants';

export const calcNewSpellSlots = (currCastLvl: number, className?: string) => {
  if (currCastLvl === 0) return [];
  if (currCastLvl === 1) return spellLevelSlots[0];
  const currentSpellSlots = spellLevelSlots[currCastLvl];
  const newSpellSlots = spellLevelSlots[currCastLvl + 1];
  return newSpellSlots.map((newSlot, i) => {
    if (!currentSpellSlots[i]) return newSlot;
    return newSlot - currentSpellSlots[i];
  });
};
