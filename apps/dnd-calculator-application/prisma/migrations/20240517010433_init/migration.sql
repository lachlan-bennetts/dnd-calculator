/*
  Warnings:

  - You are about to drop the column `attributes` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "attributes",
DROP COLUMN "skills",
ADD COLUMN     "attributeArray" INTEGER[],
ADD COLUMN     "skillArray" INTEGER[];
