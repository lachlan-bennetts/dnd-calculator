/*
  Warnings:

  - You are about to drop the column `PossibleSkillProficiencies` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "PossibleSkillProficiencies",
ADD COLUMN     "availableSkillProficiencies" "Skill"[];
