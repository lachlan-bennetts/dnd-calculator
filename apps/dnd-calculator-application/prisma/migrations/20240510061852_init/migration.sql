/*
  Warnings:

  - You are about to drop the column `hitPointsAtFirstLevel` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfHitDie` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `staticHitPointIncrease` on the `Class` table. All the data in the column will be lost.
  - Added the required column `PrimaryAttribute` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "hitPointsAtFirstLevel",
DROP COLUMN "numberOfHitDie",
DROP COLUMN "staticHitPointIncrease",
ADD COLUMN     "PossibleSkillProficiencies" "Skill"[],
ADD COLUMN     "PrimaryAttribute" "Attribute" NOT NULL,
ADD COLUMN     "possibleStartingItems" TEXT[];

-- CreateTable
CREATE TABLE "_ClassFeatureToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MonsterToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassFeatureToSpell_AB_unique" ON "_ClassFeatureToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassFeatureToSpell_B_index" ON "_ClassFeatureToSpell"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MonsterToSpell_AB_unique" ON "_MonsterToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_MonsterToSpell_B_index" ON "_MonsterToSpell"("B");

-- AddForeignKey
ALTER TABLE "_ClassFeatureToSpell" ADD CONSTRAINT "_ClassFeatureToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "ClassFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassFeatureToSpell" ADD CONSTRAINT "_ClassFeatureToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Monster"("monsterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToSpell" ADD CONSTRAINT "_MonsterToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellId") ON DELETE CASCADE ON UPDATE CASCADE;
