/*
  Warnings:

  - You are about to drop the `_BackgroundToItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BackgroundToItem" DROP CONSTRAINT "_BackgroundToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_BackgroundToItem" DROP CONSTRAINT "_BackgroundToItem_B_fkey";

-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "equipment" TEXT[];

-- DropTable
DROP TABLE "_BackgroundToItem";
