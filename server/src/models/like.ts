import mongoose from "mongoose";
import { likeSchema } from "./schemas";

class LikeModel {
  private likeDB = mongoose.model("likes", likeSchema);

  async findByEmail(email: string) {
    const likes = await this.likeDB.find({ email }, { _id: 0, postId: 1 });
    return likes;
  }
  async create(likeInfo: object) {
    await this.likeDB.create(likeInfo);
  }
  async deleteOne(likeInfo: object) {
    await this.likeDB.deleteOne(likeInfo);
  }
  async findOne(condition: object) {
    const like = await this.likeDB.findOne(condition);
    return like;
  }
}

export default LikeModel;
