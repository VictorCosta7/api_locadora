import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  idAdmin: boolean;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
