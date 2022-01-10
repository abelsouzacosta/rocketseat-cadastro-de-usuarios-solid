import { v4 as uuidV4 } from "uuid";

class User {
  protected id?: string;
  protected name: string;
  protected admin: boolean;
  protected email: string;
  protected created_at: Date;
  protected updated_at: Date;

  constructor() {
    this.id = this.id ? this.id : uuidV4();
  }
}

export { User };
