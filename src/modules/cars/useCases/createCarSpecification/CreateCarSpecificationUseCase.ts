import { ICarsRepository } from "modules/cars/repositories/ICarsRepisitory";
import { ISpesificationRepository } from "modules/cars/repositories/ISpecificationRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  specification_id: string;
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("SpecificationRepository")
    private specificationRepository: ISpesificationRepository
  ) {}

  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not Exists!");
    }

    const specifications = await this.specificationRepository.findByIds(
      specification_id
    );

    carExists.
  }
}

export { CreateCarSpecificationUseCase };
