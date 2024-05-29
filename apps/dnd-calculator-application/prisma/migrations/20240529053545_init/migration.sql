/*
  Warnings:

  - The primary key for the `CharacterClass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CharacterClass` table. All the data in the column will be lost.
  - You are about to drop the `_ClassFeatureToSpell` table. If the table is not empty, all the data it contains will be lost.
  - The required column `characterClassId` was added to the `CharacterClass` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `spellAttackBonus` to the `CharacterClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spellCapacity` to the `CharacterClass` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClassFeatureToSpell" DROP CONSTRAINT "_ClassFeatureToSpell_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassFeatureToSpell" DROP CONSTRAINT "_ClassFeatureToSpell_B_fkey";

-- AlterTable
ALTER TABLE "CharacterClass" DROP CONSTRAINT "CharacterClass_pkey",
DROP COLUMN "id",
ADD COLUMN     "characterClassId" TEXT NOT NULL,
ADD COLUMN     "spellAttackBonus" INTEGER NOT NULL,
ADD COLUMN     "spellCapacity" INTEGER NOT NULL,
ADD CONSTRAINT "CharacterClass_pkey" PRIMARY KEY ("characterClassId");

-- DropTable
DROP TABLE "_ClassFeatureToSpell";

-- CreateTable
CREATE TABLE "CharacterSpell" (
    "id" TEXT NOT NULL,
    "characterClassId" TEXT NOT NULL,
    "spellId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSpell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClassToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToSpell_AB_unique" ON "_ClassToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToSpell_B_index" ON "_ClassToSpell"("B");

-- AddForeignKey
ALTER TABLE "CharacterSpell" ADD CONSTRAINT "CharacterSpell_characterClassId_fkey" FOREIGN KEY ("characterClassId") REFERENCES "CharacterClass"("characterClassId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSpell" ADD CONSTRAINT "CharacterSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("spellId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToSpell" ADD CONSTRAINT "_ClassToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("className") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToSpell" ADD CONSTRAINT "_ClassToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("spellId") ON DELETE CASCADE ON UPDATE CASCADE;
