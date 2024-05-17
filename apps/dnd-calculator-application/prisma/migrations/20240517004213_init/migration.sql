/*
  Warnings:

  - You are about to drop the column `spellSaveDC` on the `Character` table. All the data in the column will be lost.
  - Added the required column `spellSaveDC` to the `CharacterClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "spellSaveDC";

-- AlterTable
ALTER TABLE "CharacterClass" ADD COLUMN     "spellSaveDC" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "spellCastingAttribute" TEXT;
