import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface Irequest {
  email: string;
  password: string;
}

interface Iresponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private authenticateRepository: UsersRepository
  ) {}

  async execute({ email, password }: Irequest): Promise<Iresponse> {
    const user = await this.authenticateRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "eeb7c4b019492d5c74406648e0f849e6", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: Iresponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
