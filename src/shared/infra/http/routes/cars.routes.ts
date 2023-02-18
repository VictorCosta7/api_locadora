import { Router } from 'express';

import { CreateCarController } from 'modules/cars/useCases/createCar/CreateCarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListAvaliableCarsController } from 'modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController';
import { prismaClient } from 'shared/infra/prismaORM';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

const listCarsController = new ListAvaliableCarsController();

carsRoutes.get('/available', listCarsController.handle);

carsRoutes.get('/', async (req, res) => {
  const records = await prismaClient.cars.findMany({
    include: {
      Car_specifications: true,
    },
  });

  res.json(records);
});

export { carsRoutes };
