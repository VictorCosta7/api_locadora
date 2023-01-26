import { Users } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<Users>;
}

export { IUsersRepository };
