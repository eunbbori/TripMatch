import mongoose from "mongoose";
import { matchSchema } from "./schemas";

class MatchModel {
  private matchDB = mongoose.model("matches", matchSchema);

  async create(matchInfo: object) {
    await this.matchDB.create(matchInfo);
  }
  async findOne(matchId: string, projection: object) {
    const match = await this.matchDB.findOne({ matchId }, projection);
    return match;
  }
  async updateOne(matchId: string, matchInfo: object) {
    await this.matchDB.updateOne({ matchId }, matchInfo);
  }
  async deleteOne(matchId: string) {
    await this.matchDB.deleteOne({ matchId });
  }
}

export default MatchModel;
