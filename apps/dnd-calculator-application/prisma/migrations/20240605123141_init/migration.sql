-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "cantrip" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enhancement" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ritual" BOOLEAN NOT NULL DEFAULT false;
