import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  async handle(request: Request, response: Response) {
    const specifications = await this.listSpecificationUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationController };
