import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/ICarsRepisitory";
import { AppError } from "shared/errors/AppError";

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
  }) {
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
    });
  }
}

export { CreateCarUseCase };
