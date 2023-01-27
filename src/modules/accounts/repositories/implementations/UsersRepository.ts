import { IUsersRepository } from "../IUsersRepository";

import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";

import { prismaClient } from "../../../../database";

import { Users } from "@prisma/client";

class UsersRepository implements IUsersRepository {
  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await prismaClient.users.create({
      data: {
        name,
        password,
        email,
        driver_license,
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

  async verrifyPassword(password: string): Promise<Users> {
    const passwordMatch = await prismaClient.users.findFirst({
      where: {
        password,
      },
    });

    return passwordMatch;
  }
}

export { UsersRepository };
