import { inject, injectable } from "tsyringe";
import { UsersRepository } from "modules/accounts/infra/prisma/repositories/UsersRepository";
import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUsersDTO";
import { hash } from "bcrypt";
import { AppError } from "shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: UsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByName(name);

    if (userExists) {
      throw new AppError("User alredy exists!");
    }

    if (!password) {
      throw new AppError("Password is required!");
    }

    const passwordHash = await hash(password, 8);

    this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
