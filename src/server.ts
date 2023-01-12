<<<<<<< HEAD
import express, { json } from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";
=======
import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";
>>>>>>> 7437eba (adding prism in api)

const app = express();

app.use(express.json());

<<<<<<< HEAD
app.use("/categories", categoriesRoutes);

app.use("/specifications", specificationRoutes);
=======
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
>>>>>>> 7437eba (adding prism in api)

app.listen(3333, () => {
  console.log("Server is running!");
});
