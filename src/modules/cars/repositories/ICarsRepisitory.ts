import { Cars } from "@prisma/client";
import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByPlate(license_plate: string): Promise<Cars>;
}

export { ICarsRepository };
