/*
  Warnings:

  - You are about to drop the column `avaliable` on the `cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "avaliable",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;
