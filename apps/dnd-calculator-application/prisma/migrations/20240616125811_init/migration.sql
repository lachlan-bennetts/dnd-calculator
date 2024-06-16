-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "spellCastingLevel" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "spellSlots" INTEGER[] DEFAULT ARRAY[]::INTEGER[];

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "spellCapacity" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "subClassTitles" TEXT[],
ADD COLUMN     "subClasses" TEXT[];
