/*
  Warnings:

  - You are about to drop the column `spellAttackBonus` on the `CharacterClass` table. All the data in the column will be lost.
  - You are about to drop the column `spellSaveDC` on the `CharacterClass` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CharacterClass" DROP COLUMN "spellAttackBonus",
DROP COLUMN "spellSaveDC";
