import { ISpesificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpesificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlredyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error("Specification alredy exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
