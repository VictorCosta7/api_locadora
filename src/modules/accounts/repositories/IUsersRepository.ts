import { Users } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<Users>;
  findByEmail(email: string): Promise<Users>;
  verrifyPassword(password: string): Promise<Users>;
}

export { IUsersRepository };
