import { Specification } from '../../entities/Specification';
import { ISpesificationRepository } from '../../repositories/ISpecificationRepository';

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpesificationRepository) {}

  async execute(): Promise<Specification[]> {
    const speciifications = await this.specificationRepository.list();

    return speciifications;
  }
}

export { ListSpecificationUseCase };
