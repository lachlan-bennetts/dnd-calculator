/*
  Warnings:

  - Added the required column `hitDie` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterClass" ADD COLUMN     "subclass" TEXT;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "hitDie" INTEGER NOT NULL,
ADD COLUMN     "savingThrows" TEXT[];

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "raceFeatures" TEXT[];

-- CreateTable
CREATE TABLE "ClassFeature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "subclass" TEXT,
    "level" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterClassToClassFeature" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterClassToClassFeature_AB_unique" ON "_CharacterClassToClassFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterClassToClassFeature_B_index" ON "_CharacterClassToClassFeature"("B");

-- AddForeignKey
ALTER TABLE "_CharacterClassToClassFeature" ADD CONSTRAINT "_CharacterClassToClassFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClassToClassFeature" ADD CONSTRAINT "_CharacterClassToClassFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "ClassFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
