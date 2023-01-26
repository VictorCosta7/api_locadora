import { Request, Response } from "express-serve-static-core";

import { ImportCategoryUseCase } from "./importCategoryUseCase";
import { container } from "tsyringe";

class ImportCategoryController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    try {
      const alreadyExistent = await importCategoryUseCase.execute(file);

      return response.send({ alreadyExistent });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ImportCategoryController };
