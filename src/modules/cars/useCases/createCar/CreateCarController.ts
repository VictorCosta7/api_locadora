import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      license_plate,
      fine_amount,
      brand,
      id_category,
      daily_rate,
    } = request.body;

    console.log("aqui");

    try {
      const createCarUseCase = container.resolve(CreateCarUseCase);

      const car = await createCarUseCase.execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        id_category,
      });

      return response.status(201).json(car);
    } catch (error) {
      console.log(error);

      return response.status(500).json({ error: error.message });
    }
  }
}

export { CreateCarController };
