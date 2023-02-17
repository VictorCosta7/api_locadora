/*
  Warnings:

  - The `specification_id` column on the `car_specification` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "car_specification" DROP CONSTRAINT "car_specification_specification_id_fkey";

-- AlterTable
ALTER TABLE "car_specification" DROP COLUMN "specification_id",
ADD COLUMN     "specification_id" TEXT[];

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "specificationsIds" TEXT[];

-- AddForeignKey
ALTER TABLE "car_specification" ADD CONSTRAINT "car_specification_specification_id_fkey" FOREIGN KEY ("specification_id") REFERENCES "specification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
