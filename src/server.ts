import 'express-async-errors';

import 'reflect-metadata';

import express, {
 NextFunction, json, Request, Response 
} from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from "./routes/index.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server is running!');
});
