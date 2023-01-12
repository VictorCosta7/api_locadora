<<<<<<< HEAD
import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";
import { listCategoriesController } from "../modules/cars/useCases/listCategories/Index";

const categoriesRoutes = Router();

=======
import multer from "multer";
import { Router, response } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";
import { listCategoriesController } from "../modules/cars/useCases/listCategories/Index";
import { request } from "http";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

>>>>>>> 7437eba (adding prism in api)
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

<<<<<<< HEAD
=======
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

>>>>>>> 7437eba (adding prism in api)
export { categoriesRoutes };
