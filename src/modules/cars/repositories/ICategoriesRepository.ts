import { Categories } from "@prisma/client";
import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Categories[]>;
  findByName(name: string): Promise<Categories>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
