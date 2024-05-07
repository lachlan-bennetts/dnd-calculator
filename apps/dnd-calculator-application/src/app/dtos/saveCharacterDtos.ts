export interface saveCharacterDto {
  playerName: string;
  characterName: string;
  armourClass: number
  currentHitPoints: number;
  maxHitPoints: number;
  tempHitPoints: number;
  race: RaceEnum;
  speed: number;
  background: string;
  classLevel: number;
  class: ClassEnum;
  subClass: string;
  userId: string;
}

enum ClassEnum {
  BARBARIAN = "Barbarian",
  BARD = "Bard",
  CLERIC = "Cleric",
  DRUID = "Druid",
  FIGHTER = "Fighter",
  MONK = "Monk",
  PALADIN = "Paladin",
  RANGER = "Ranger",
  ROGUE = "Rogue",
  SORCERER = "Sorcerer",
  WARLOCK = "Warlock",
  WIZARD = "Wizard"
}

enum RaceEnum {
  DRAGONBORN = 'Dragonborn',
  DWARF = 'Dwarf',
  ELF = "Elf",
  GNOME = "Gnome",
  HALF_ELF = 'Half-Elf',
  HALF_ORC = "Half-Orc",
  HALFLING = "Halfling",
  HUMAN = "Human",
  TIEFLING = "Tiefling"
}