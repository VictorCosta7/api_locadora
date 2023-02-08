import { container } from "tsyringe";

import { ICategoriesRepository } from "modules/cars/repositories/ICategoriesRepository";

import { CategoriesRepository } from "modules/cars/infra/reposotories/CategoryRepositories";

import { ISpesificationRepository } from "modules/cars/repositories/ISpecificationRepository";

import { SpecificationRepository } from "modules/cars/infra/reposotories/SpecificationRepository";

import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";

import { UsersRepository } from "modules/accounts/infra/prisma/repositories/UsersRepository";

import { ICarsRepository } from "modules/cars/repositories/ICarsRepisitory";

import { CarsRepository } from "modules/cars/infra/reposotories/CarRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpesificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
