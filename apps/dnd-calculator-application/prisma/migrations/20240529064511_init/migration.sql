/*
  Warnings:

  - Added the required column `spellSaveDC` to the `CharacterClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterClass" ADD COLUMN     "spellSaveDC" INTEGER NOT NULL;
