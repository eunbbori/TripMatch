import { StayModel } from "../models";
import { openAPI } from "../utils";

class StayService {
  private stayModel = new StayModel();

  private async updateMonthly() {
    const stay = await this.stayModel.findOne();
    const today = new Date().getMonth();
    if (today === stay?.createdAt.getMonth()) return;
    const stayInfoes = await openAPI();
    await this.stayModel.deleteMany();
    await this.stayModel.create(stayInfoes);
  }
  async getAll() {
    await this.updateMonthly();
    const stays = await this.stayModel.findMany();
    if (stays.length === 0) throw new Error("204");
    return stays;
  }
}

const stayService = new StayService();

export default stayService;
