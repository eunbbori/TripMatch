import { CommentModel } from "../models";

class CommentService {
  private commentModel = new CommentModel();

  async create(body: object, author: object) {
    await this.commentModel.create({ ...body, author });
  }
  async checkAuthor(commentId: string, email: string) {
    const comment = await this.commentModel.findOne(commentId);
    if (comment?.author.email !== email) throw new Error("403");
  }
  async update(commentId: string, body: object) {
    await this.commentModel.updateOne(commentId, body);
  }
  async delete(commentId: string) {
    await this.commentModel.deleteOne(commentId);
  }
  async getComments(condition: object) {
    const comments = await this.commentModel.findMany(condition, {
      _id: 0,
      commentId: 1,
      content: 1,
      author: 1,
      createdAt: 1,
    });
    return comments;
  }
  async findByAuthor(email: string) {
    const comments = await this.commentModel.findMany(
      { "author.email": email, postId: { $exists: true } },
      { _id: 0, postId: 1 }
    );
    if (comments.length === 0) throw new Error("204");
    return comments;
  }
  async getCommunityId(commentId: string) {
    const comment = await this.commentModel.findOne(commentId);
    return comment?.communityId || "";
  }
  async banish(condition: object) {
    await this.commentModel.deleteMany(condition);
  }
}

const commentService = new CommentService();

export default commentService;
