import mongoose from "mongoose";
import { staySchema } from "./schemas";

class StayModel {
  private stayDB = mongoose.model("stays", staySchema);

  async findOne() {
    const stay = await this.stayDB.findOne({}, { _id: 0, createdAt: 1 });
    return stay;
  }
  async deleteMany() {
    await this.stayDB.deleteMany({});
  }
  async create(stayInfoes: []) {
    await this.stayDB.create(stayInfoes);
  }
  async findMany() {
    const stays = await this.stayDB.find(
      {},
      {
        addr1: 1,
        firstimage: 1,
        goodstay: 1,
        tel: 1,
        title: 1,
      }
    );
    return stays;
  }
}

export default StayModel;
