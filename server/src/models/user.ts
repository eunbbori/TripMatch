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
  async findForAdmin(condition: object) {
    const users = await this.userDB.find(condition, {
      _id: 0,
      email: 1,
      nickname: 1,
      createdAt: 1,
      role: 1,
    });
    return users;
  }
}

export default UserModel;
