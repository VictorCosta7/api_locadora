import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationRepository = null;

const listSpecificationsUseCase = new ListSpecificationUseCase(
  specificationRepository
);

const listSpecificationsController = new ListSpecificationController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
