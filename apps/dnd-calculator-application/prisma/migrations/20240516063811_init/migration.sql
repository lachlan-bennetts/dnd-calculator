/*
  Warnings:

  - You are about to drop the column `ToolsProficiency` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `armourProficiency` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `weaponTypeProficiency` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "ToolsProficiency",
DROP COLUMN "armourProficiency",
DROP COLUMN "weaponTypeProficiency";
