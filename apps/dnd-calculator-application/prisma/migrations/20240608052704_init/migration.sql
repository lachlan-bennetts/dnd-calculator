/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ClassFeature` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ClassFeature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "subClassStart" INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE "ClassFeature" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "areaOfEffectType" TEXT NOT NULL DEFAULT 'None',
ADD COLUMN     "targetType" TEXT NOT NULL DEFAULT 'Any',
ALTER COLUMN "actionCastingTime" SET DEFAULT 1,
ALTER COLUMN "spellSave" SET DEFAULT 'None';
