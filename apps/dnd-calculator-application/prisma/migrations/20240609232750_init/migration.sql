/*
  Warnings:

  - You are about to drop the column `createdAt` on the `RaceFeature` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `RaceFeature` table. All the data in the column will be lost.
  - You are about to drop the `_RaceToRaceFeature` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subRace` to the `RaceFeature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RaceToRaceFeature" DROP CONSTRAINT "_RaceToRaceFeature_A_fkey";

-- DropForeignKey
ALTER TABLE "_RaceToRaceFeature" DROP CONSTRAINT "_RaceToRaceFeature_B_fkey";

-- AlterTable
ALTER TABLE "RaceFeature" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "subRace" TEXT NOT NULL;

-- DropTable
DROP TABLE "_RaceToRaceFeature";

-- AddForeignKey
ALTER TABLE "RaceFeature" ADD CONSTRAINT "RaceFeature_subRace_fkey" FOREIGN KEY ("subRace") REFERENCES "Race"("subRace") ON DELETE RESTRICT ON UPDATE CASCADE;
