import { NoticeModel } from "../models";

class NoticeService {
  private noticeModel = new NoticeModel();

  async update(noticeId: string, body: object) {
    await this.noticeModel.updateOne(noticeId, body);
  }
  async delete(noticeId: string) {
    await this.noticeModel.deleteOne(noticeId);
  }
  async create(body: object) {
    await this.noticeModel.create(body);
  }
  async findAll() {
    const notices = await this.noticeModel.findAll();
    if (notices.length === 0) throw new Error("204");
    return notices;
  }
  async findOne(noticeId: string) {
    const notice = await this.noticeModel.findOne(noticeId);
    if (!notice) throw new Error("204");
    return notice;
  }
}

const noticeService = new NoticeService();

export default noticeService;
