import { LikeModel } from "../models";

class LikeService {
  private likeModel = new LikeModel();

  async getPostIds(email: string) {
    const likes = await this.likeModel.findByEmail(email);
    if (likes.length === 0) throw new Error("204");
    return likes;
  }
  async create(likeInfo: object) {
    await this.likeModel.create(likeInfo);
  }
  async delete(likeInfo: object) {
    await this.likeModel.deleteOne(likeInfo);
  }
  async isLiked(posts: [], email: string) {
    const postsWithLike = [];
    for (const { postId, title, region, thumbnail } of posts) {
      const like = await this.likeModel.findOne({ email, postId });
      postsWithLike.push({
        postId,
        title,
        region,
        thumbnail,
        like: like ? true : false,
      });
    }
    return postsWithLike;
  }
  async checkDuplicated(condition: object) {
    const like = await this.likeModel.findOne(condition);
    if (like) throw new Error("409");
  }
}

const likeService = new LikeService();

export default likeService;
