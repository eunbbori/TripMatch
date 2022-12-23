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
  async findByPost(condition: object) {
    const comments = await this.commentDB.find(condition, {
      _id: 0,
      commentId: 1,
      content: 1,
      author: 1,
      createdAt: 1,
    });
    return comments;
  }
}

export default CommentModel;
