import { inject, injectable } from "tsyringe";
import { Category } from "modules/cars/entities/Category";
import { ICategoriesRepository } from "modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const all = await this.categoryRepository.list();

    return all;
  }
}

export { ListCategoriesUseCase };
