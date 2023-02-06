import { inject, injectable } from "tsyringe";
import { UsersRepository } from "modules/accounts/repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUsersDTO";
import { hash } from "bcrypt";
import { AppError } from "errors/AppError";

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
