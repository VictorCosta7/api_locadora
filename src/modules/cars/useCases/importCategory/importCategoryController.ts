import { Request, Response } from "express-serve-static-core";

import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    const { file } = request;

    try {
      const alreadyExistent = await this.importCategoryUseCase.execute(file);

      return response.send({ alreadyExistent });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ImportCategoryController };
