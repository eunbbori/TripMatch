import mongoose from "mongoose";
import { userSchema } from "./schemas";
import { User } from "../interfaces";

class UserModel {
  private userDB = mongoose.model("users", userSchema);

  async create(userInfo: Partial<User>) {
    const user = await this.userDB.create(userInfo);
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userDB.findOne({ email });
    return user;
  }
}

export default UserModel;
