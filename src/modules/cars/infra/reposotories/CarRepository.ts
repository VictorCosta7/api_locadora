import { ICreateCarDTO } from 'modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from 'modules/cars/repositories/ICarsRepisitory';
import { prismaClient } from 'shared/infra/prismaORM';

import { Cars } from '.prisma/client';

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
    const where: Record<string, unknown> = {
      available: true,
    };

    if (name) {
      where.name = {
        contains: name,
        mode: 'insensitive',
      };
    }

    if (brand) {
      where.brand = {
        contains: brand,
        mode: 'insensitive',
      };
    }

    if (id_category) {
      where.id_category = id_category;
    }

    const all = await prismaClient.cars.findMany({
      where,
    });

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
