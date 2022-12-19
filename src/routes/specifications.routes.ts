import { request, response, Router } from "express";
import { createSpecificifationController } from "../modules/cars/useCases/createSpecification/Index";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications/Index";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificifationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationRoutes };
