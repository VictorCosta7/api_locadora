import { ICreateCarDTO } from "modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "modules/cars/repositories/ICarsRepisitory";
import { prismaClient } from "shared/infra/prismaORM";
import { Cars } from "@prisma/client";

class CarsRepository implements ICarsRepository {
  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    id_category,
  }: ICreateCarDTO): Promise<void> {
    await prismaClient.cars.create({
      data: {
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        id_category,
      },
    });
  }

  async findByPlate(license_plate: string): Promise<Cars> {
    const plate = await prismaClient.cars.findFirst({
      where: {
        license_plate,
      },
    });
    return plate;
  }
}

export { CarsRepository };
