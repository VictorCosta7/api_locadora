import { Request, Response } from "express";
import { container } from "tsyringe";
import { updateAvatarUseCase } from "./updateUserAvatarUseCase";

class updateUserAvataController {
  async handle(request: Request, response: Response) {}
}

export { updateUserAvataController };
