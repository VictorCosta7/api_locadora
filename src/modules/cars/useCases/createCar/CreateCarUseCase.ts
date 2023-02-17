import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/ICarsRepisitory";
import { AppError } from "shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
  license_plate: string;
  fine_amount: number;
  brand: string;
  id_category: string;
  daily_rate: number;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    license_plate,
    fine_amount,
    brand,
    id_category,
    daily_rate,
  }: IRequest): Promise<void> {
    const plateCarAlredyExists = await this.carsRepository.findByPlate(
      license_plate
    );

    if (plateCarAlredyExists) {
      throw new AppError("Car alredy exists!");
    }

    await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      id_category,
      specifications: [],
    });
  }
}

export { CreateCarUseCase };
