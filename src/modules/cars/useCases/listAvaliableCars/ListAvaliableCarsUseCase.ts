import { Cars } from ".prisma/client";
import { ICarsRepository } from "modules/cars/repositories/ICarsRepisitory";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id_category?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ id_category, brand, name }: IRequest): Promise<Cars[]> {
    const all = await this.carsRepository.findAvailable(
      id_category,
      brand,
      name
    );

    return all;
  }
}

export { ListCarUseCase };
