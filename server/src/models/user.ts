import mongoose from "mongoose";
import { userSchema } from "./schemas";
import { User } from "../interfaces";

class UserModel {
  private userDB = mongoose.model("users", userSchema);

  async create(userInfo: object) {
    const user = await this.userDB.create(userInfo);
    return user;
  }
  async findByEmail(email: string, projection: object) {
    const user = await this.userDB.findOne({ email }, projection);
    return user;
  }
  async deleteOne(email: string) {
    await this.userDB.deleteOne({ email });
  }
  async updateOne(email: string, userInfo: object) {
    await this.userDB.updateOne({ email }, userInfo);
  }
}

export default UserModel;
