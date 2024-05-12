-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL');

-- CreateEnum
CREATE TYPE "Attribute" AS ENUM ('STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('WEAPON', 'ARMOUR', 'TOOL', 'CONSUMABLE', 'MISC');

-- CreateEnum
CREATE TYPE "ConsumableType" AS ENUM ('POTION', 'SCROLL', 'WAND', 'ROD', 'STAFF', 'RING', 'WONDROUS_ITEM', 'MISC');

-- CreateEnum
CREATE TYPE "ToolType" AS ENUM ('ARTISANS_TOOL', 'DISGUISE_KIT', 'FORGERY_KIT', 'GAMING_SET', 'HERBALISM_KIT', 'MUSICAL_INSTRUMENT', 'NAVIGATORS_TOOL', 'POISONERS_KIT', 'THIEVES_TOOL', 'VEHICLES_LAND', 'VEHICLES_WATER');

-- CreateEnum
CREATE TYPE "ArmourType" AS ENUM ('LIGHT_ARMOUR', 'MEDIUM_ARMOUR', 'HEAVY_ARMOUR', 'SHIELDS');

-- CreateEnum
CREATE TYPE "WeaponType" AS ENUM ('SIMPLE_WEAPON', 'MARTIAL_WEAPON');

-- CreateEnum
CREATE TYPE "DamageType" AS ENUM ('ACID', 'BLUDGEONING', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'PIERCING', 'POISON', 'PSYCHIC', 'RADIANT', 'SLASHING', 'THUNDER');

-- CreateEnum
CREATE TYPE "ConditionType" AS ENUM ('BLINDED', 'CHARMED', 'DEAFENED', 'FRIGHTENED', 'GRAPPLED', 'INCAPACITATED', 'INVISIBLE', 'PARALYZED', 'PETRIFIED', 'POISONED', 'PRONE', 'RESTRAINED', 'STUNNED', 'UNCONSCIOUS');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('COMMON', 'DWARVISH', 'ELVISH', 'GIANT', 'GNOMISH', 'GOBLIN', 'HALFLING', 'ORC', 'ABYSSAL', 'CELESTIAL', 'DRACONIC', 'DEEP_SPEECH', 'INFERNAL', 'PRIMORDIAL', 'SYLVAN', 'UNDERCOMMON', 'ALL');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'GARGANTUAN');

-- CreateEnum
CREATE TYPE "CreatureType" AS ENUM ('ABERRATION', 'BEAST', 'CELESTIAL', 'CONSTRUCT', 'DRAGON', 'ELEMENTAL', 'FEY', 'FIEND', 'GIANT', 'HUMANOID', 'MONSTROSITY', 'OOZE', 'PLANT', 'UNDEAD');

-- CreateEnum
CREATE TYPE "WeaponsEnum" AS ENUM ('CLUB', 'DAGGER', 'GREATCLUB', 'HANDAXE', 'JAVELIN', 'LIGHT_HAMMER', 'MACE', 'QUARTERSTAFF', 'SICKLE', 'SPEAR', 'LIGHT_CROSSBOW', 'DART', 'SHORTBOW', 'SLING', 'BATTLEAXE', 'FLAIL', 'GLAIVE', 'GREATAXE', 'GREATSWORD', 'HALBERD', 'LANCE', 'LONGSWORD', 'MAUL', 'MORNINGSTAR', 'PIKE', 'RAPIER', 'SCIMITAR', 'SHORTSWORD', 'TRIDENT', 'WAR_PICK', 'WARHAMMER', 'WHIP', 'BLOWGUN', 'HAND_CROSSBOW', 'HEAVY_CROSSBOW', 'LONGBOW', 'NET');

-- CreateEnum
CREATE TYPE "ToolsEnum" AS ENUM ('TINKERS_TOOLS', 'SMITHS_TOOLS', 'BREWERS_SUPPLIES', 'CARPENTERS_TOOLS', 'COBBLERS_TOOLS', 'COOKS_UTENSILS', 'GLASSBLOWERS_TOOLS', 'JEWELERS_TOOLS', 'LEATHERWORKERS_TOOLS', 'MASONS_TOOLS', 'PAINTERS_SUPPLIES', 'POTTERS_TOOLS', 'WEAVERS_TOOLS', 'WOODCARVERS_TOOLS', 'ALCHEMISTS_SUPPLIES', 'CALLIGRAPHERS_SUPPLIES', 'CARTOGRAPHERS_TOOLS', 'DISGUISE_KIT', 'FORGERY_KIT', 'HERBALISM_KIT', 'POISONERS_KIT', 'THIEVES_TOOLS', 'NAVIGATORS_TOOLS');

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "campaignName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "raceId" TEXT NOT NULL,
    "parentRace" TEXT NOT NULL,
    "subRace" TEXT NOT NULL,
    "briefDescription" TEXT NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "darkVision" INTEGER NOT NULL,
    "statPoolModifier" INTEGER[],
    "statPoolIncrease" INTEGER NOT NULL DEFAULT 0,
    "damageTypeResistance" "DamageType"[],
    "damageTypeAdvantageThrows" "DamageType"[],
    "conditionAdvantageThrows" "ConditionType"[],
    "MaxHealthModifier" INTEGER NOT NULL DEFAULT 0,
    "cantripSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "LanguageSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "walkingSpeed" INTEGER NOT NULL,
    "flyingSpeed" INTEGER NOT NULL DEFAULT 0,
    "swimmingSpeed" INTEGER NOT NULL DEFAULT 0,
    "climbingSpeed" INTEGER NOT NULL DEFAULT 0,
    "size" "Size" NOT NULL DEFAULT 'MEDIUM',
    "effects" TEXT[],
    "weaponProficiencies" "WeaponsEnum"[] DEFAULT ARRAY[]::"WeaponsEnum"[],
    "armourProficiencies" "ArmourType"[] DEFAULT ARRAY[]::"ArmourType"[],
    "toolProficiencies" "ToolsEnum"[] DEFAULT ARRAY[]::"ToolsEnum"[],
    "skillProficiencies" "Skill"[] DEFAULT ARRAY[]::"Skill"[],
    "languages" "Language"[],

    CONSTRAINT "Race_pkey" PRIMARY KEY ("raceId")
);

-- CreateTable
CREATE TABLE "RaceFeature" (
    "raceFeatureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RaceFeature_pkey" PRIMARY KEY ("raceFeatureId")
);

-- CreateTable
CREATE TABLE "HeldItem" (
    "heldItemId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "HeldItem_pkey" PRIMARY KEY ("heldItemId")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "itemType" "ItemType" NOT NULL,
    "consumableType" "ConsumableType" NOT NULL,
    "toolType" "ToolType" NOT NULL,
    "armourType" "ArmourType" NOT NULL,
    "weaponType" "WeaponType" NOT NULL,
    "attributeModifier" INTEGER[],
    "skillModifier" INTEGER[],
    "hasCharges" BOOLEAN NOT NULL,
    "charges" INTEGER NOT NULL,
    "requiresAttunement" BOOLEAN NOT NULL,
    "damageType" TEXT NOT NULL,
    "damageDieType" INTEGER NOT NULL,
    "damageDieNumber" INTEGER NOT NULL,
    "damageBonus" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "Class" (
    "classId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hitDie" INTEGER NOT NULL,
    "weaponProficiencies" "WeaponType"[],
    "armourProficiencies" "ArmourType"[],
    "availableToolProficencies" "ToolType"[] DEFAULT ARRAY[]::"ToolType"[],
    "availableSkillProficiencies" "Skill"[],
    "possibleStartingItems" TEXT[],
    "startingEquipment" TEXT[],
    "primaryAttribute" "Attribute" NOT NULL,
    "savingThrowProficiencies" "Attribute"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("classId")
);

-- CreateTable
CREATE TABLE "ClassFeature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "subclass" TEXT,
    "level" INTEGER NOT NULL,
    "classId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterClass" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "subclass" TEXT,
    "classLevel" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monster" (
    "monsterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" "Size" NOT NULL,
    "alignment" TEXT NOT NULL,
    "armourClass" INTEGER NOT NULL,
    "hitPoints" INTEGER NOT NULL,
    "hitDieType" INTEGER NOT NULL,
    "HitDieNumber" INTEGER NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "speed" INTEGER NOT NULL,
    "attributes" TEXT[],
    "savingThrows" INTEGER[],
    "skills" INTEGER[],
    "features" TEXT[],
    "damageResistances" "DamageType"[],
    "damageImmunities" "DamageType"[],
    "conditionImmunities" "ConditionType"[],
    "passivePerception" INTEGER NOT NULL,
    "senses" TEXT[],
    "languages" "Language"[],
    "challengeRating" INTEGER NOT NULL,
    "specialAbilities" TEXT NOT NULL,
    "actions" TEXT NOT NULL,
    "legendaryActions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("monsterId")
);

-- CreateTable
CREATE TABLE "Spell" (
    "spellId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "castingTime" INTEGER NOT NULL,
    "range" INTEGER NOT NULL,
    "areaOfEffect" TEXT NOT NULL,
    "components" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "damageType" "DamageType" NOT NULL,
    "damageDieType" INTEGER NOT NULL,
    "damageDieNumber" INTEGER NOT NULL,
    "damageBonus" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("spellId")
);

-- CreateTable
CREATE TABLE "Character" (
    "characterId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "armourClass" INTEGER NOT NULL,
    "currenthitPoints" INTEGER NOT NULL,
    "maxHitPoints" INTEGER NOT NULL,
    "tempHitPoints" INTEGER,
    "speed" INTEGER NOT NULL,
    "spellSaveDC" INTEGER NOT NULL,
    "isProficient" BOOLEAN NOT NULL,
    "proficiencyBonus" INTEGER NOT NULL,
    "weaponProficiency" "WeaponType"[],
    "armourProficiency" "ArmourType"[],
    "ToolProficiency" "ToolType"[],
    "raceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "attributes" INTEGER[],
    "skills" INTEGER[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("characterId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "_RaceToRaceFeature" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClassFeatureToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterClassToClassFeature" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MonsterToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_raceId_key" ON "Character"("raceId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_userId_key" ON "Character"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_RaceToRaceFeature_AB_unique" ON "_RaceToRaceFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_RaceToRaceFeature_B_index" ON "_RaceToRaceFeature"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassFeatureToSpell_AB_unique" ON "_ClassFeatureToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassFeatureToSpell_B_index" ON "_ClassFeatureToSpell"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterClassToClassFeature_AB_unique" ON "_CharacterClassToClassFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterClassToClassFeature_B_index" ON "_CharacterClassToClassFeature"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MonsterToSpell_AB_unique" ON "_MonsterToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_MonsterToSpell_B_index" ON "_MonsterToSpell"("B");

-- AddForeignKey
ALTER TABLE "HeldItem" ADD CONSTRAINT "HeldItem_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("characterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeldItem" ADD CONSTRAINT "HeldItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassFeature" ADD CONSTRAINT "ClassFeature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClass" ADD CONSTRAINT "CharacterClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("characterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClass" ADD CONSTRAINT "CharacterClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("raceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToRaceFeature" ADD CONSTRAINT "_RaceToRaceFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("raceId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToRaceFeature" ADD CONSTRAINT "_RaceToRaceFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "RaceFeature"("raceFeatureId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassFeatureToSpell" ADD CONSTRAINT "_ClassFeatureToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "ClassFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassFeatureToSpell" ADD CONSTRAINT "_ClassFeatureToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClassToClassFeature" ADD CONSTRAINT "_CharacterClassToClassFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClassToClassFeature" ADD CONSTRAINT "_CharacterClassToClassFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "ClassFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Monster"("monsterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellId") ON DELETE CASCADE ON UPDATE CASCADE;
