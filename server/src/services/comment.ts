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
    const comments = await this.commentModel.findByPost(condition);
    return comments;
  }
}

const commentService = new CommentService();

export default commentService;
