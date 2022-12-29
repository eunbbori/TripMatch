import mongoose from "mongoose";
import { commentSchema } from "./schemas";

class CommentModel {
  private commentDB = mongoose.model("comments", commentSchema);

  async create(commentInfo: object) {
    await this.commentDB.create(commentInfo);
  }
  async findOne(commentId: string) {
    const comment = await this.commentDB.findOne({ commentId });
    return comment;
  }
  async updateOne(commentId: string, commentInfo: object) {
    await this.commentDB.updateOne({ commentId }, commentInfo);
  }
  async deleteOne(commentId: string) {
    await this.commentDB.deleteOne({ commentId });
  }
  async findMany(condition: object, projection: object) {
    const comments = await this.commentDB.find(condition, projection);
    return comments;
  }
  async deleteMany(condition: object) {
    await this.commentDB.deleteMany(condition);
  }
}

export default CommentModel;
