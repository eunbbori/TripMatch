import { MatchModel } from "../models";

class MatchService {
  private matchModel = new MatchModel();

  async create(matchInfo: object) {
    await this.matchModel.create(matchInfo);
  }
}

const matchService = new MatchService();

export default matchService;
