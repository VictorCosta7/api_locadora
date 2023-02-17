import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const hashPassword = await hash("admin", 8);

  const id = uuidv4();

  const user = {
    id: id,
    name: "admin",
    email: "admin@email.com",
    password: hashPassword,
    driver_license: "sim",
    isAdmin: true,
  };

  await prisma.users.create({
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      driver_license: user.driver_license,
      isAdmin: user.isAdmin,
    },
  });
}

main().then(() => console.log("User is seeding!"));
