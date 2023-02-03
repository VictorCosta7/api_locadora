import { prismaClient } from "../../../../database";
import { Users } from "@prisma/client";

import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";

class UsersRepository implements IUsersRepository {
  async updateAvatar(id: string, avatar: string): Promise<void> {
    await prismaClient.users.update({
      where: {
        id,
      },
      data: {
        avatar,
      },
    });
  }

  async create({
    name,
    password,
    email,
    driver_license,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    await prismaClient.users.create({
      data: {
        name,
        password,
        email,
        driver_license,
        avatar,
        id,
      },
    });
  }

  async findByName(name: string): Promise<Users> {
    const user = await prismaClient.users.findFirst({
      where: {
        name,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<Users> {
    const user = await prismaClient.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async verrifyPassword(password: string): Promise<Users[]> {
    const passwords = await prismaClient.users.findMany({
      where: {
        password,
      },
    });

    return passwords;
  }

  async findById(id: string): Promise<Users> {
    const user = await prismaClient.users.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}

export { UsersRepository };
