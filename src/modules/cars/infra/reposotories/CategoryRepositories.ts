import { Categories } from "@prisma/client";

import { prismaClient } from "../../../../shared/infra/prismaORM";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }): Promise<void> {
    await prismaClient.categories.create({
      data: {
        name,
        description,
      },
    });
  }

  async findByName(name: string): Promise<Categories> {
    const category = await prismaClient.categories.findFirst({
      where: {
        name,
      },
    });

    return category;
  }

  async list(): Promise<Categories[]> {
    const all = await prismaClient.categories.findMany();

    return all;
  }
}

export { CategoriesRepository };
