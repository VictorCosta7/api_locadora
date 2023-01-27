import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateCategoryDTO } from "../../../cars/repositories/ICategoriesRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { hash } from "bcrypt";

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
      throw new Error("User alredy exists!");
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
