/*
  Warnings:

  - You are about to drop the column `raceId` on the `Character` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[raceName]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `raceName` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `armourClass` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `subrace` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_raceId_fkey";

-- DropIndex
DROP INDEX "Character_raceId_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "raceId",
ADD COLUMN     "proficientWeapons" TEXT[],
ADD COLUMN     "raceName" TEXT NOT NULL,
DROP COLUMN "armourClass",
ADD COLUMN     "armourClass" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "subrace" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Character_raceName_key" ON "Character"("raceName");

-- CreateIndex
CREATE UNIQUE INDEX "Race_name_key" ON "Race"("name");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceName_fkey" FOREIGN KEY ("raceName") REFERENCES "Race"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
