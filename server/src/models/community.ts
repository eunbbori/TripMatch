import mongoose from "mongoose";
import { communitySchema } from "./schemas";

class CommunityModel {
  private communityDB = mongoose.model("communities", communitySchema);

  async countPages(condition: object) {
    const total = await this.communityDB.countDocuments(condition);
    return total / 10;
  }
  async findTen(page: number, condition: object) {
    const communities = await this.communityDB
      .find(condition, {
        _id: 0,
        communityId: 1,
        title: 1,
        region: 1,
        category: 1,
        author: 1,
        createdAt: 1,
        commentCount: 1,
      })
      .sort({ createdAt: -1 })
      .skip(10 * (page - 1))
      .limit(10);
    return communities;
  }
  async findOne(communityId: string) {
    const community = await this.communityDB.findOne(
      { communityId },
      {
        _id: 0,
        communityId: 1,
        title: 1,
        content: 1,
        author: 1,
        region: 1,
        category: 1,
        createdAt: 1,
      }
    );
    return community;
  }
  async updateOne(communityId: string, communityInfo: object) {
    await this.communityDB.updateOne({ communityId }, communityInfo);
  }
  async deleteOne(communityId: string) {
    await this.communityDB.deleteOne({ communityId });
  }
  async create(communityInfo: object) {
    await this.communityDB.create(communityInfo);
  }
  async findByKeyword(condition: object) {
    const communities = await this.communityDB
      .find(condition, {
        _id: 0,
        communityId: 1,
        title: 1,
        region: 1,
        category: 1,
        author: 1,
        createdAt: 1,
        commentCount: 1,
      })
      .sort({ createdAt: -1 });
    return communities;
  }
}

export default CommunityModel;
