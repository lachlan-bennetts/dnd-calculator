/*
  Warnings:

  - You are about to drop the column `ToolProficiency` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `isProficient` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiency` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `subclass` on the `CharacterClass` table. All the data in the column will be lost.
  - You are about to drop the `_CharacterClassToClassFeature` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `currentSpeed` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Made the column `tempHitPoints` on table `Character` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CharacterClassToClassFeature" DROP CONSTRAINT "_CharacterClassToClassFeature_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacterClassToClassFeature" DROP CONSTRAINT "_CharacterClassToClassFeature_B_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "ToolProficiency",
DROP COLUMN "isProficient",
DROP COLUMN "speed",
DROP COLUMN "weaponProficiency",
ADD COLUMN     "ToolsProficiency" "ToolsEnum"[] DEFAULT ARRAY[]::"ToolsEnum"[],
ADD COLUMN     "currentSpeed" INTEGER NOT NULL,
ADD COLUMN     "skillProficiency" "Skill"[],
ADD COLUMN     "weaponTypeProficiency" "WeaponType"[],
ALTER COLUMN "tempHitPoints" SET NOT NULL,
ALTER COLUMN "tempHitPoints" SET DEFAULT 0,
ALTER COLUMN "armourProficiency" SET DEFAULT ARRAY[]::"ArmourType"[];

-- AlterTable
ALTER TABLE "CharacterClass" DROP COLUMN "subclass",
ADD COLUMN     "subClass" TEXT;

-- DropTable
DROP TABLE "_CharacterClassToClassFeature";
