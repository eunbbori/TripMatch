import { PostModel } from "../models";

class PostService {
  private postModel = new PostModel();

  async getTotalCount(region: string, status: string) {
    const condition: { region?: string; status?: boolean } = {};
    if (region) condition.region = region;
    if (status) condition.status = true;
    const totalCount = await this.postModel.countPosts(condition);
    return totalCount;
  }
  async getEightPosts(page: number, region: string, status: string) {
    const condition: { region?: string; status?: boolean } = {};
    if (region) condition.region = region;
    if (status) condition.status = true;
    const posts = await this.postModel.findEight(page, condition);
    return posts;
  }
  async getWishlist(postIds: []) {
    const posts = [];
    for (const { postId } of postIds) {
      posts.push(
        await this.postModel.findOne(postId, {
          _id: 0,
          postId: 1,
          title: 1,
          region: 1,
          thumbnail: 1,
        })
      );
    }
    if (posts.length === 0) throw new Error("204");
    return posts;
  }
  async getPost(postId: string) {
    const post = await this.postModel.findOne(postId, {
      _id: 0,
      postId: 1,
      title: 1,
      content: 1,
      region: 1,
      duration: 1,
      hopeGender: 1,
      hopeAge: 1,
      thumbnail: 1,
      userCount: 1,
      contact: 1,
      createdAt: 1,
      author: 1,
      status: 1,
    });
    if (!post) throw new Error("204");
    return post;
  }
  async update(postId: string, body: object) {
    await this.postModel.updateOne(postId, body);
  }
  async delete(postId: string) {
    await this.postModel.deleteOne(postId);
  }
  async getAuthor(postId: string) {
    const author = await this.postModel.findOne(postId, { _id: 0, author: 1 });
    return author;
  }
  async create(body: object, author: object) {
    await this.postModel.create({ ...body, author });
  }
  async search(keyword: string) {
    const regex = new RegExp(`(${[...keyword].join(".*")})`);
    const posts = await this.postModel.findByKeyword({
      $or: [{ title: regex }, { content: regex }],
    });
    return posts;
  }
  async getCommentlist(postIds: []) {
    const posts = [];
    for (const { postId } of postIds) {
      posts.push(
        await this.postModel.findOne(postId, {
          _id: 0,
          postId: 1,
          title: 1,
          region: 1,
          duration: 1,
          author: 1,
        })
      );
    }
    if (posts.length === 0) throw new Error("204");
    return posts;
  }
  async getMyEnroll(matches: []) {
    const posts = [];
    for (const { matchId, postId, author, matchStatus } of matches) {
      const post = await this.postModel.findOne(postId, {
        _id: 0,
        title: 1,
        duration: 1,
        contact: 1,
      });
      posts.push({
        matchId,
        postId,
        author,
        matchStatus,
        title: post?.title,
        duration: post?.duration,
        contact: post?.contact,
      });
    }
    if (posts.length === 0) throw new Error("204");
    return posts;
  }
  async getRecvdEnroll(matches: []) {
    const posts = [];
    for (const { matchId, postId, applicant, matchStatus } of matches) {
      const post = await this.postModel.findOne(postId, {
        _id: 0,
        title: 1,
        duration: 1,
        status: 1,
      });
      posts.push({
        matchId,
        postId,
        applicant,
        matchStatus,
        title: post?.title,
        duration: post?.duration,
        status: post?.status,
      });
    }
    if (posts.length === 0) throw new Error("204");
    return posts;
  }
  async getByAuthor(email: string) {
    const posts = await this.postModel.findByAuthor(email);
    if (posts.length === 0) throw new Error("204");
    return posts;
  }
}

const postService = new PostService();

export default postService;
