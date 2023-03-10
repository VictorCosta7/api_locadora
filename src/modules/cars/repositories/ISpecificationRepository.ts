import { Specification } from "../infra/prisma/entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpesificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  findByIds(ids: string): Promise<Specification[]>;
}

export { ISpesificationRepository, ICreateSpecificationDTO };
