import { Categories } from "@prisma/client";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";
import { Category } from "../../entities/Category";
import { prismaClient } from "../../../../database";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = await prismaClient.categories.create({
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
    const category = await prismaClient.categories.findUnique({
      where: {
        name,
      },
    });
    return category;
  }
}

export { CategoriesRepositoryInMemory };
