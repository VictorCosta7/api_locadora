import { Router } from "express";

import { CreateCarController } from "modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvaliableCarsController } from "modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

const listCarsController = new ListAvaliableCarsController();

carsRoutes.get("/available", listCarsController.handle);

export { carsRoutes };
