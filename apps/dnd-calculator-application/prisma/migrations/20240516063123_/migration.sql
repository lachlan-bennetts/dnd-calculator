/*
  Warnings:

  - The primary key for the `Background` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `backgroundId` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `backgroundId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `raceId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `CharacterClass` table. All the data in the column will be lost.
  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `classId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `ClassFeature` table. All the data in the column will be lost.
  - The primary key for the `Race` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `raceId` on the `Race` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[backgroundName]` on the table `Background` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subRace]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[className]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `backgroundName` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundName` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subRace` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `className` to the `CharacterClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `className` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `className` to the `ClassFeature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_backgroundId_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_raceId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterClass" DROP CONSTRAINT "CharacterClass_classId_fkey";

-- DropForeignKey
ALTER TABLE "ClassFeature" DROP CONSTRAINT "ClassFeature_classId_fkey";

-- DropForeignKey
ALTER TABLE "_BackgroundToItem" DROP CONSTRAINT "_BackgroundToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_RaceToRaceFeature" DROP CONSTRAINT "_RaceToRaceFeature_A_fkey";

-- DropIndex
DROP INDEX "Character_raceId_key";

-- AlterTable
ALTER TABLE "Background" DROP CONSTRAINT "Background_pkey",
DROP COLUMN "backgroundId",
DROP COLUMN "name",
ADD COLUMN     "backgroundName" TEXT NOT NULL,
ADD CONSTRAINT "Background_pkey" PRIMARY KEY ("backgroundName");

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "backgroundId",
DROP COLUMN "raceId",
ADD COLUMN     "backgroundName" TEXT NOT NULL,
ADD COLUMN     "subRace" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CharacterClass" DROP COLUMN "classId",
ADD COLUMN     "className" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Class" DROP CONSTRAINT "Class_pkey",
DROP COLUMN "classId",
DROP COLUMN "name",
ADD COLUMN     "className" TEXT NOT NULL,
ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("className");

-- AlterTable
ALTER TABLE "ClassFeature" DROP COLUMN "classId",
ADD COLUMN     "className" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP CONSTRAINT "Race_pkey",
DROP COLUMN "raceId",
ADD CONSTRAINT "Race_pkey" PRIMARY KEY ("subRace");

-- CreateIndex
CREATE UNIQUE INDEX "Background_backgroundName_key" ON "Background"("backgroundName");

-- CreateIndex
CREATE UNIQUE INDEX "Character_subRace_key" ON "Character"("subRace");

-- CreateIndex
CREATE UNIQUE INDEX "Class_className_key" ON "Class"("className");

-- AddForeignKey
ALTER TABLE "ClassFeature" ADD CONSTRAINT "ClassFeature_className_fkey" FOREIGN KEY ("className") REFERENCES "Class"("className") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClass" ADD CONSTRAINT "CharacterClass_className_fkey" FOREIGN KEY ("className") REFERENCES "Class"("className") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundName_fkey" FOREIGN KEY ("backgroundName") REFERENCES "Background"("backgroundName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subRace_fkey" FOREIGN KEY ("subRace") REFERENCES "Race"("subRace") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToRaceFeature" ADD CONSTRAINT "_RaceToRaceFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("subRace") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackgroundToItem" ADD CONSTRAINT "_BackgroundToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Background"("backgroundName") ON DELETE CASCADE ON UPDATE CASCADE;
