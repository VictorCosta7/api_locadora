import { v4 as uuidv4 } from "uuid";
import { Specification } from "./Specification";

class Car {
  id: string;

  name: string;

  description: string;

  daily_rate: number;

  license_plate: string;

  fine_amount: number;

  available: boolean;

  brand: string;

  id_category: string;

  created_at: Date;

  specifications: Specification[];
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
    }
  }
}

export { Car };
