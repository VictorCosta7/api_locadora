import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  name: string;
  password: string;
  email: string;
  driver_license: string;
  avatar?: string;
  idAdmin: boolean;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
    if (!this.avatar) {
      this.avatar = null;
    }
  }
}

export { User };
