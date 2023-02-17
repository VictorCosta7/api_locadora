import { Cars } from ".prisma/client";
import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByPlate(license_plate: string): Promise<Cars>;
  findAvailable(
    id_category?: string,
    brand?: string,
    name?: string
  ): Promise<Cars[]>;
  findById(car_id: string): Promise<Cars>;
}

export { ICarsRepository };
