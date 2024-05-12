/*
  Warnings:

  - You are about to drop the column `attributeSavingThrows` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "attributeSavingThrows",
ADD COLUMN     "savingThrowProficiencies" "Attribute"[];
