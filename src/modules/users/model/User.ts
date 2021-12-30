import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: boolean;
  updated_at: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
