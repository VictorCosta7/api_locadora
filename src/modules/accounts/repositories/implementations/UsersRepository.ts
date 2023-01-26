import { IUsersRepository } from "../IUsersRepository";

import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";

import { prismaClient } from "../../../../database";

import { Users } from "@prisma/client";

class UsersRepository implements IUsersRepository {
  async create({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await prismaClient.users.create({
      data: {
        name,
        username,
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
}

export { UsersRepository };
