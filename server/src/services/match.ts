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
  async getByApplicant(email: string) {
    const matches = await this.matchModel.findMany(
      { "applicant.email": email, scoredByApplicant: false },
      { _id: 0, matchId: 1, postId: 1, author: 1, matchStatus: 1, endDate: 1 }
    );
    if (matches.length === 0) throw new Error("204");
    return matches;
  }
  async getByAuthor(email: string) {
    const matches = await this.matchModel.findMany(
      { "author.email": email, scoredByAuthor: false },
      {
        _id: 0,
        matchId: 1,
        postId: 1,
        applicant: 1,
        matchStatus: 1,
        endDate: 1,
      }
    );
    if (matches.length === 0) throw new Error("204");
    return matches;
  }
}

const matchService = new MatchService();

export default matchService;
