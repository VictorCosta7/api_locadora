import { Users } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
  updateAvatar(id: string, avatar: string): Promise<void>;
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<Users>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}

export { IUsersRepository };
