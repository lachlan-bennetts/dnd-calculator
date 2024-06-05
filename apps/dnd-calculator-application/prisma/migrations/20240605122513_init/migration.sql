/*
  Warnings:

  - You are about to drop the column `TargetNumber` on the `Spell` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "TargetNumber",
ADD COLUMN     "targetNumber" INTEGER NOT NULL DEFAULT 1;
