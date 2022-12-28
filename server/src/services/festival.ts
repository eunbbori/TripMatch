import { FestivalModel } from "../models";
import { getFestivals } from "../utils";

class FestivalService {
  private festivalModel = new FestivalModel();

  private async updateDaily() {
    const festival = await this.festivalModel.findOne();
    const today = new Date().toLocaleDateString("ko-kr").replace(/[. ]/g, "");
    if (
      today ===
      festival?.createdAt.toLocaleDateString("ko-kr").replace(/[. ]/g, "")
    )
      return;
    const festivalInfoes = await getFestivals(today);
    await this.festivalModel.deleteMany();
    await this.festivalModel.create(festivalInfoes);
  }
  async getAll() {
    await this.updateDaily();
    const festivals = await this.festivalModel.findMany();
    if (festivals.length === 0) throw new Error("204");
    return festivals;
  }
}

const festivalService = new FestivalService();

export default festivalService;
