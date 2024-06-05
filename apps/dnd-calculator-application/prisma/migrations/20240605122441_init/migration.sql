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
    "subRace" TEXT NOT NULL,
    "parentRace" TEXT NOT NULL,
    "briefDescription" TEXT NOT NULL,
    "creatureType" TEXT NOT NULL,
    "darkVision" INTEGER NOT NULL,
    "statPoolModifier" INTEGER[],
    "statPoolIncrease" INTEGER NOT NULL DEFAULT 0,
    "damageTypeResistance" TEXT[],
    "damageTypeAdvantageThrows" TEXT[],
    "conditionAdvantageThrows" TEXT[],
    "MaxHealthModifier" INTEGER NOT NULL DEFAULT 0,
    "cantripSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "languageSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "walkingSpeed" INTEGER NOT NULL,
    "flyingSpeed" INTEGER NOT NULL DEFAULT 0,
    "swimmingSpeed" INTEGER NOT NULL DEFAULT 0,
    "climbingSpeed" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Medium',
    "effects" TEXT[],
    "weaponProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "armourProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "toolProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "skillProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "languages" TEXT[],

    CONSTRAINT "Race_pkey" PRIMARY KEY ("subRace")
);

-- CreateTable
CREATE TABLE "RaceFeature" (
    "raceFeatureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RaceFeature_pkey" PRIMARY KEY ("raceFeatureId")
);

-- CreateTable
CREATE TABLE "Class" (
    "className" TEXT NOT NULL,
    "hitDie" INTEGER NOT NULL,
    "weaponProficiencies" TEXT[],
    "armourProficiencies" TEXT[],
    "availableToolProficencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "availableSkillProficiencies" TEXT[],
    "startingEquipment" TEXT[],
    "primaryAttribute" TEXT NOT NULL,
    "spellCastingAttribute" TEXT,
    "savingThrowProficiencies" TEXT[],
    "recommendedStandardArray" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("className")
);

-- CreateTable
CREATE TABLE "ClassFeature" (
    "classFeatureId" TEXT NOT NULL,
    "featureName" TEXT NOT NULL,
    "featureDescription" TEXT NOT NULL,
    "subclass" TEXT,
    "featureLevel" INTEGER NOT NULL,
    "className" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("classFeatureId")
);

-- CreateTable
CREATE TABLE "CharacterClass" (
    "characterClassId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "spellSaveDC" INTEGER NOT NULL,
    "spellCapacity" INTEGER NOT NULL,
    "ProficientSkills" TEXT[],
    "subClass" TEXT,
    "classLevel" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterClass_pkey" PRIMARY KEY ("characterClassId")
);

-- CreateTable
CREATE TABLE "CharacterSpell" (
    "id" TEXT NOT NULL,
    "characterClassId" TEXT NOT NULL,
    "spellName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSpell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "backgroundName" TEXT NOT NULL,
    "backgroundDescription" TEXT NOT NULL,
    "skillProficiencies" TEXT[],
    "toolProficiencies" TEXT[],
    "toolTypeProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "languageSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "equipment" TEXT[],
    "backgroundFeatureTitle" TEXT NOT NULL,
    "backgroundFeatureDescription" TEXT NOT NULL,
    "suggestedCharacteristics" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("backgroundName")
);

-- CreateTable
CREATE TABLE "Character" (
    "characterId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "armourClass" INTEGER NOT NULL,
    "currentHitPoints" INTEGER NOT NULL,
    "maxHitPoints" INTEGER NOT NULL,
    "tempHitPoints" INTEGER NOT NULL DEFAULT 0,
    "currentSpeed" INTEGER NOT NULL,
    "proficiencyBonus" INTEGER NOT NULL,
    "alignment" TEXT NOT NULL,
    "backgroundName" TEXT NOT NULL,
    "subRace" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "attributeArray" INTEGER[],
    "skillArray" INTEGER[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("characterId")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "consumableType" TEXT,
    "toolType" TEXT,
    "armourType" TEXT,
    "weaponType" TEXT,
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
CREATE TABLE "HeldItem" (
    "heldItemId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "isEquipped" BOOLEAN NOT NULL DEFAULT false,
    "equipmentType" TEXT[],
    "itemId" TEXT NOT NULL,

    CONSTRAINT "HeldItem_pkey" PRIMARY KEY ("heldItemId")
);

-- CreateTable
CREATE TABLE "Monster" (
    "monsterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "armourClass" INTEGER NOT NULL,
    "hitPoints" INTEGER NOT NULL,
    "hitDieType" INTEGER NOT NULL,
    "HitDieNumber" INTEGER NOT NULL,
    "creatureType" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "attributes" TEXT[],
    "savingThrows" INTEGER[],
    "skills" INTEGER[],
    "features" TEXT[],
    "damageResistances" TEXT[],
    "damageImmunities" TEXT[],
    "conditionImmunities" TEXT[],
    "passivePerception" INTEGER NOT NULL,
    "senses" TEXT[],
    "languages" TEXT[],
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
    "spellName" TEXT NOT NULL,
    "spellLevel" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "actionCastingTime" INTEGER NOT NULL DEFAULT 0,
    "bonusActionCasting" BOOLEAN NOT NULL DEFAULT false,
    "selfCasting" BOOLEAN NOT NULL DEFAULT false,
    "touchCasting" BOOLEAN NOT NULL DEFAULT false,
    "range" INTEGER NOT NULL,
    "areaOfEffect" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "components" TEXT[],
    "roundDuration" INTEGER NOT NULL DEFAULT 0,
    "spellDescription" TEXT NOT NULL,
    "concentration" BOOLEAN NOT NULL DEFAULT false,
    "TargetNumber" INTEGER NOT NULL DEFAULT 1,
    "multiTargetProximity" INTEGER NOT NULL DEFAULT 0,
    "sightRequired" BOOLEAN NOT NULL DEFAULT false,
    "spellType" TEXT NOT NULL,
    "damageType" TEXT NOT NULL DEFAULT '',
    "dieType" INTEGER NOT NULL DEFAULT 0,
    "dieNumber" INTEGER NOT NULL DEFAULT 0,
    "spellSave" TEXT NOT NULL DEFAULT '',
    "attackType" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[],

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("spellName")
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
CREATE TABLE "_ClassSpells" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MonsterToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Race_subRace_key" ON "Race"("subRace");

-- CreateIndex
CREATE UNIQUE INDEX "Class_className_key" ON "Class"("className");

-- CreateIndex
CREATE UNIQUE INDEX "Background_backgroundName_key" ON "Background"("backgroundName");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Spell_spellName_key" ON "Spell"("spellName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_RaceToRaceFeature_AB_unique" ON "_RaceToRaceFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_RaceToRaceFeature_B_index" ON "_RaceToRaceFeature"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassSpells_AB_unique" ON "_ClassSpells"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassSpells_B_index" ON "_ClassSpells"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MonsterToSpell_AB_unique" ON "_MonsterToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_MonsterToSpell_B_index" ON "_MonsterToSpell"("B");

-- AddForeignKey
ALTER TABLE "ClassFeature" ADD CONSTRAINT "ClassFeature_className_fkey" FOREIGN KEY ("className") REFERENCES "Class"("className") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClass" ADD CONSTRAINT "CharacterClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("characterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClass" ADD CONSTRAINT "CharacterClass_className_fkey" FOREIGN KEY ("className") REFERENCES "Class"("className") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSpell" ADD CONSTRAINT "CharacterSpell_characterClassId_fkey" FOREIGN KEY ("characterClassId") REFERENCES "CharacterClass"("characterClassId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSpell" ADD CONSTRAINT "CharacterSpell_spellName_fkey" FOREIGN KEY ("spellName") REFERENCES "Spell"("spellName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundName_fkey" FOREIGN KEY ("backgroundName") REFERENCES "Background"("backgroundName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subRace_fkey" FOREIGN KEY ("subRace") REFERENCES "Race"("subRace") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeldItem" ADD CONSTRAINT "HeldItem_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("characterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeldItem" ADD CONSTRAINT "HeldItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToRaceFeature" ADD CONSTRAINT "_RaceToRaceFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("subRace") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToRaceFeature" ADD CONSTRAINT "_RaceToRaceFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "RaceFeature"("raceFeatureId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassSpells" ADD CONSTRAINT "_ClassSpells_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("className") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassSpells" ADD CONSTRAINT "_ClassSpells_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Monster"("monsterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellName") ON DELETE CASCADE ON UPDATE CASCADE;
