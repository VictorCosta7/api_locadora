import { Specification } from "../infra/prisma/entities/Specification";

interface ICreateCarDTO {
  name: string;

  description: string;

  daily_rate: number;

  license_plate: string;

  fine_amount: number;

  brand: string;

  id_category: string;

  specifications: Specification[];
}

export { ICreateCarDTO };
