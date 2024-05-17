/*
  Warnings:

  - You are about to drop the column `currenthitPoints` on the `Character` table. All the data in the column will be lost.
  - Added the required column `currentHitPoints` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "currenthitPoints",
ADD COLUMN     "currentHitPoints" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CharacterClass" ADD COLUMN     "ProficientSkills" TEXT[];
