import { MatchModel } from "../models";

class MatchService {
  private matchModel = new MatchModel();

  async create(matchInfo: object) {
    await this.matchModel.create(matchInfo);
  }
  async checkAuthor(matchId: string, email: string) {
    const match = await this.matchModel.findOne(matchId, { _id: 0, author: 1 });
    if (match?.author.email !== email) throw new Error("403");
  }
  async update(matchId: string, body: object) {
    await this.matchModel.updateOne(matchId, body);
  }
  async checkApplicant(matchId: string, email: string) {
    const match = await this.matchModel.findOne(matchId, {
      _id: 0,
      applicant: 1,
    });
    if (match?.applicant.email !== email) throw new Error("403");
  }
  async delete(matchId: string) {
    await this.matchModel.deleteOne(matchId);
  }
}

const matchService = new MatchService();

export default matchService;
