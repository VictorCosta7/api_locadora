import { request, response, Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificatioinController";

import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

const listSpecificationsController = new ListSpecificationController();

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
