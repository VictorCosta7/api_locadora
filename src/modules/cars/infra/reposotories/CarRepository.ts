import { ICreateCarDTO } from "modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "modules/cars/repositories/ICarsRepisitory";
import { prismaClient } from "shared/infra/prismaORM";
import { Car } from "../prisma/entities/Car";
import { Cars } from ".prisma/client";

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

  async findAvailable(
    id_category: string,
    brand: string,
    name: string
  ): Promise<Cars[]> {
    const all = await prismaClient.cars.findMany({
      where: {
        available: true,
      },
    });

    if (name) {
      const cars = all.filter((car) => car.name === name);
      return cars;
    } else if (brand) {
      const cars = all.filter((car) => car.brand === brand);
      return cars;
    } else if (id_category) {
      const cars = all.filter((car) => car.id_category === id_category);
      return cars;
    }

    return all;
  }

  async findById(id: string): Promise<Cars> {
    const carId = await prismaClient.cars.findUnique({
      where: {
        id,
      },
    });

    return carId;
  }
}

export { CarsRepository };
