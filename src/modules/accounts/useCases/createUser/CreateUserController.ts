import { Request, Response } from "express";
import { container } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password, email, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
