/*
  Warnings:

  - You are about to drop the column `armourProficiency` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiency` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "armourProficiency",
DROP COLUMN "weaponProficiency",
ADD COLUMN     "armourProficiencies" "ArmourType"[],
ADD COLUMN     "weaponProficiencies" "WeaponType"[];
