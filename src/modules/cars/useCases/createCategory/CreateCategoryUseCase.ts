import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlredyExists = await this.categoryRepository.findByName(name);

    if (categoryAlredyExists) {
      throw new Error("Category alredy exists!");
    }

    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
