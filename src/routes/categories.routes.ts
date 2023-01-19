import { Router, request, response } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";
import { listCategoriesController } from "../modules/cars/useCases/listCategories/Index";
import multer from "multer";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/importCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory/intex";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
