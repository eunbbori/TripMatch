import { CommunityModel } from "../models";

class CommunityService {
  private communityModel = new CommunityModel();

  async getTotalPage(region: string) {
    const condition: { region?: string } = {};
    if (region) condition.region = region;
    const totalPage = await this.communityModel.countPages(condition);
    return totalPage;
  }
  async getTenCommus(page: number, region: string) {
    const condition: { region?: string } = {};
    if (region) condition.region = region;
    const communities = await this.communityModel.findTen(page, condition);
    return communities;
  }
  async getCommunity(communityId: string) {
    const community = await this.communityModel.findOne(communityId);
    if (!community) throw new Error("204");
    return community;
  }
  async update(communityId: string, body: object) {
    await this.communityModel.updateOne(communityId, body);
  }
  async delete(communityId: string) {
    await this.communityModel.deleteOne(communityId);
  }
  async create(body: object, author: object) {
    await this.communityModel.create({ ...body, author });
  }
  async search(keyword: string) {
    const regex = new RegExp(`(${[...keyword].join(".*")})`);
    const communities = await this.communityModel.findByKeyword({
      $or: [{ title: regex }, { content: regex }],
    });
    return communities;
  }
  async checkAuthor(communityId: string, email: string) {
    const community = await this.communityModel.findOne(communityId);
    if (community?.author.email !== email) throw new Error("403");
  }
}

const communityService = new CommunityService();

export default communityService;
