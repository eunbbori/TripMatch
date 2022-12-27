import mongoose from "mongoose";
import { festivalSchema } from "./schemas";

class FestivalModel {
  private festivalDB = mongoose.model("festivals", festivalSchema);

  async findOne() {
    const festival = await this.festivalDB.findOne(
      {},
      { _id: 0, createdAt: 1 }
    );
    return festival;
  }
  async deleteMany() {
    await this.festivalDB.deleteMany({});
  }
  async create(festivalInfoes: []) {
    await this.festivalDB.create(festivalInfoes);
  }
  async findMany() {
    const festivals = await this.festivalDB.find(
      {},
      {
        _id: 0,
        addr1: 1,
        eventstartdate: 1,
        eventenddate: 1,
        firstimage: 1,
        tel: 1,
        title: 1,
      }
    );
    return festivals;
  }
}

export default FestivalModel;
