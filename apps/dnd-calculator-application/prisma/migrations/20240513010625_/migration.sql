/*
  Warnings:

  - You are about to drop the column `LanguageSlotModifier` on the `Race` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subRace]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alignment` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isEquipped` to the `HeldItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EquipmentPlacement" AS ENUM ('HELMET', 'BODY', 'SHOES', 'MAIN_HAND', 'OFF_HAND', 'BELT', 'NECKLACE', 'LEFT_RING', 'RIGHT_RING', 'GLOVES', 'EARS', 'EYES', 'MOUTH', 'NULL');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "alignment" TEXT NOT NULL,
ADD COLUMN     "backgroundId" TEXT NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "HeldItem" ADD COLUMN     "EquippedTo" "EquipmentPlacement" NOT NULL DEFAULT 'NULL',
ADD COLUMN     "isEquipped" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "LanguageSlotModifier",
ADD COLUMN     "languageSlotModifier" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Background" (
    "backgroundId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skillProficiencies" "Skill"[],
    "toolProficiencies" "ToolsEnum"[],
    "toolTypeProficiencies" "ToolType"[] DEFAULT ARRAY[]::"ToolType"[],
    "languageSlotModifier" INTEGER NOT NULL DEFAULT 0,
    "equipment" TEXT[],
    "backgroundFeatureTitle" TEXT NOT NULL,
    "backgroundFeatureDescription" TEXT NOT NULL,
    "suggestedCharacteristics" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("backgroundId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Race_subRace_key" ON "Race"("subRace");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("backgroundId") ON DELETE RESTRICT ON UPDATE CASCADE;
