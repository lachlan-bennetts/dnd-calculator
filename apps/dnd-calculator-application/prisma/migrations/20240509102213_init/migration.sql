/*
  Warnings:

  - Added the required column `numberOfHitDie` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `hitDie` on the `Class` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "numberOfHitDie" INTEGER NOT NULL,
DROP COLUMN "hitDie",
ADD COLUMN     "hitDie" INTEGER NOT NULL;
