import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { prisma } from "@prisma/client";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { usersRoutes } from "../../../../routes/users.routes";

interface Irequest {
  email: string;
  password: string;
  id: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private authenticateRepository: UsersRepository
  ) {}

  execute({ email, password, id }: Irequest) {
    const user = this.authenticateRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = this.authenticateRepository.verrifyPassword(password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }
  }
}

export { AuthenticateUserUseCase };
