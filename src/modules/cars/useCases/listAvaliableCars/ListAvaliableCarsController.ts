import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarUseCase } from "./ListAvaliableCarsUseCase";

class ListAvaliableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_category, name, brand } = request.query;

    const listCarUseCase = container.resolve(ListCarUseCase);

    const cars = await listCarUseCase.execute({
      brand: brand as string,
      name: name as string,
      id_category: id_category as string,
    });

    return response.json(cars);
  }
}

export { ListAvaliableCarsController };
