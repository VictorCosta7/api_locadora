import { CategoriesRepository } from "../../repositories/implementations/CategoryRepositories";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const importCategoryRepository = null;

const importCategoryUseCase = new ImportCategoryUseCase(
  importCategoryRepository
);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
