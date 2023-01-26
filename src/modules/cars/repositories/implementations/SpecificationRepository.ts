import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpesificationRepository,
} from "../ISpecificationRepository";
import { prismaClient } from "../../../../database";

class SpecificationRepository implements ISpesificationRepository {
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    await prismaClient.specification.create({
      data: {
        name,
        description,
      },
    });
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await prismaClient.specification.findFirst({
      where: {
        name,
      },
    });

    return specification;
  }

  async list(): Promise<Specification[]> {
    const all = await prismaClient.specification.findMany();

    return all;
  }
}

export { SpecificationRepository };
