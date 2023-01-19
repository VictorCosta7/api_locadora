import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";
import { prismaClient } from "../../../../database";
import { Categories } from "@prisma/client";

class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

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
    const category = await prismaClient.categories.findUnique({
      where: {
        name,
      },
    });

    if (category) {
      throw new Error("Category alredi Exists!");
    }

    return category;
  }
}

export { CategoriesRepository };
