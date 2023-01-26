import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpesificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpesificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const speciifications = await this.specificationRepository.list();

    return speciifications;
  }
}

export { ListSpecificationUseCase };
