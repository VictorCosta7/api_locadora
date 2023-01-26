import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface Irequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: UsersRepository
  ) {}

  async execute({ name, username, password, email, driver_license }: Irequest) {
    const userExists = await this.userRepository.findByName(name);

    if (userExists) {
      throw new Error("User alredy exists!");
    }

    this.userRepository.create({
      name,
      username,
      password,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
