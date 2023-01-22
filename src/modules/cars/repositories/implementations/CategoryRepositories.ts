import { Categories } from "@prisma/client";

import { prismaClient } from '../../../../database';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }): Promise<void> {
    await prismaClient.categories.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Categories[]> {
    const all = await prismaClient.categories.findMany();

    return all;
  }

  async findByName(name: string): Promise<Categories> {
    const category = await prismaClient.categories.findFirst({
      where: {
        name,
      },
    });

    return category;
  }
}

export { CategoriesRepository };
