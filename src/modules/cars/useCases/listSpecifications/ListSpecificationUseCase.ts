import { Specification } from "../../entities/Specification";
import { ISpesificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpesificationRepository) {}

  execute(): Specification[] {
    const speciifications = this.specificationRepository.list();

    return speciifications;
  }
}

export { ListSpecificationUseCase };
