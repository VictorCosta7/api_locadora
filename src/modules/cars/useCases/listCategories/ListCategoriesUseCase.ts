import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

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
