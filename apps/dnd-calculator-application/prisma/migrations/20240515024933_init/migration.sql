/*
  Warnings:

  - You are about to drop the column `equipment` on the `Background` table. All the data in the column will be lost.
  - The `skillProficiencies` column on the `Background` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `toolProficiencies` column on the `Background` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `toolTypeProficiencies` column on the `Background` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `armourProficiency` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ToolsProficiency` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skillProficiency` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weaponTypeProficiency` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weaponProficiencies` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `armourProficiencies` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `availableToolProficencies` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `availableSkillProficiencies` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `savingThrowProficiencies` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `EquippedTo` on the `HeldItem` table. All the data in the column will be lost.
  - The `consumableType` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `toolType` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `armourType` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weaponType` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `damageResistances` column on the `Monster` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `damageImmunities` column on the `Monster` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `conditionImmunities` column on the `Monster` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `languages` column on the `Monster` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `damageTypeResistance` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `damageTypeAdvantageThrows` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `conditionAdvantageThrows` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `size` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weaponProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `armourProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `toolProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skillProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `languages` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `primaryAttribute` on the `Class` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `quantity` to the `HeldItem` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `itemType` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `Monster` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creatureType` on the `Monster` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creatureType` on the `Race` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `damageType` on the `Spell` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "equipment",
DROP COLUMN "skillProficiencies",
ADD COLUMN     "skillProficiencies" TEXT[],
DROP COLUMN "toolProficiencies",
ADD COLUMN     "toolProficiencies" TEXT[],
DROP COLUMN "toolTypeProficiencies",
ADD COLUMN     "toolTypeProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "armourProficiency",
ADD COLUMN     "armourProficiency" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "ToolsProficiency",
ADD COLUMN     "ToolsProficiency" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "skillProficiency",
ADD COLUMN     "skillProficiency" TEXT[],
DROP COLUMN "weaponTypeProficiency",
ADD COLUMN     "weaponTypeProficiency" TEXT[];

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "weaponProficiencies",
ADD COLUMN     "weaponProficiencies" TEXT[],
DROP COLUMN "armourProficiencies",
ADD COLUMN     "armourProficiencies" TEXT[],
DROP COLUMN "availableToolProficencies",
ADD COLUMN     "availableToolProficencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "availableSkillProficiencies",
ADD COLUMN     "availableSkillProficiencies" TEXT[],
DROP COLUMN "primaryAttribute",
ADD COLUMN     "primaryAttribute" TEXT NOT NULL,
DROP COLUMN "savingThrowProficiencies",
ADD COLUMN     "savingThrowProficiencies" TEXT[];

-- AlterTable
ALTER TABLE "HeldItem" DROP COLUMN "EquippedTo",
ADD COLUMN     "equipmentType" TEXT[],
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "isEquipped" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "itemType",
ADD COLUMN     "itemType" TEXT NOT NULL,
DROP COLUMN "consumableType",
ADD COLUMN     "consumableType" TEXT,
DROP COLUMN "toolType",
ADD COLUMN     "toolType" TEXT,
DROP COLUMN "armourType",
ADD COLUMN     "armourType" TEXT,
DROP COLUMN "weaponType",
ADD COLUMN     "weaponType" TEXT;

-- AlterTable
ALTER TABLE "Monster" DROP COLUMN "size",
ADD COLUMN     "size" TEXT NOT NULL,
DROP COLUMN "creatureType",
ADD COLUMN     "creatureType" TEXT NOT NULL,
DROP COLUMN "damageResistances",
ADD COLUMN     "damageResistances" TEXT[],
DROP COLUMN "damageImmunities",
ADD COLUMN     "damageImmunities" TEXT[],
DROP COLUMN "conditionImmunities",
ADD COLUMN     "conditionImmunities" TEXT[],
DROP COLUMN "languages",
ADD COLUMN     "languages" TEXT[];

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "creatureType",
ADD COLUMN     "creatureType" TEXT NOT NULL,
DROP COLUMN "damageTypeResistance",
ADD COLUMN     "damageTypeResistance" TEXT[],
DROP COLUMN "damageTypeAdvantageThrows",
ADD COLUMN     "damageTypeAdvantageThrows" TEXT[],
DROP COLUMN "conditionAdvantageThrows",
ADD COLUMN     "conditionAdvantageThrows" TEXT[],
DROP COLUMN "size",
ADD COLUMN     "size" TEXT NOT NULL DEFAULT 'Medium',
DROP COLUMN "weaponProficiencies",
ADD COLUMN     "weaponProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "armourProficiencies",
ADD COLUMN     "armourProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "toolProficiencies",
ADD COLUMN     "toolProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "skillProficiencies",
ADD COLUMN     "skillProficiencies" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "languages",
ADD COLUMN     "languages" TEXT[];

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "damageType",
ADD COLUMN     "damageType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ArmourType";

-- DropEnum
DROP TYPE "Attribute";

-- DropEnum
DROP TYPE "ConditionType";

-- DropEnum
DROP TYPE "ConsumableType";

-- DropEnum
DROP TYPE "CreatureType";

-- DropEnum
DROP TYPE "DamageType";

-- DropEnum
DROP TYPE "EquipmentPlacement";

-- DropEnum
DROP TYPE "ItemType";

-- DropEnum
DROP TYPE "Language";

-- DropEnum
DROP TYPE "Size";

-- DropEnum
DROP TYPE "Skill";

-- DropEnum
DROP TYPE "ToolType";

-- DropEnum
DROP TYPE "ToolsEnum";

-- DropEnum
DROP TYPE "WeaponType";

-- DropEnum
DROP TYPE "WeaponsEnum";

-- CreateTable
CREATE TABLE "_BackgroundToItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BackgroundToItem_AB_unique" ON "_BackgroundToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_BackgroundToItem_B_index" ON "_BackgroundToItem"("B");

-- AddForeignKey
ALTER TABLE "_BackgroundToItem" ADD CONSTRAINT "_BackgroundToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Background"("backgroundId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackgroundToItem" ADD CONSTRAINT "_BackgroundToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("itemId") ON DELETE CASCADE ON UPDATE CASCADE;
