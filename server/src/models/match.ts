import mongoose from "mongoose";
import { matchSchema } from "./schemas";

class MatchModel {
  private matchDB = mongoose.model("matches", matchSchema);

  async create(matchInfo: object) {
    await this.matchDB.create(matchInfo);
  }
}

export default MatchModel;
