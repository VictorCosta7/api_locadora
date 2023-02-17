-- CreateTable
CREATE TABLE "car_specification" (
    "id" TEXT NOT NULL,
    "car_id" TEXT NOT NULL,
    "specification_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_specification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car_specification" ADD CONSTRAINT "car_specification_specification_id_fkey" FOREIGN KEY ("specification_id") REFERENCES "specification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_specification" ADD CONSTRAINT "car_specification_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
