import mongoose from "mongoose";
import { noticeSchema } from "./schemas";

class NoticeModel {
  private noticeDB = mongoose.model("notices", noticeSchema);

  async updateOne(noticeId: string, noticeInfo: object) {
    await this.noticeDB.updateOne({ noticeId }, noticeInfo);
  }
  async deleteOne(noticeId: string) {
    await this.noticeDB.deleteOne({ noticeId });
  }
  async create(noticeInfo: object) {
    await this.noticeDB.create(noticeInfo);
  }
  async findAll() {
    const notices = await this.noticeDB.find(
      {},
      { _id: 0, noticeId: 1, title: 1, createdAt: 1 }
    );
    return notices;
  }
  async findOne(noticeId: string) {
    const notice = await this.noticeDB.findOne(
      { noticeId },
      { _id: 0, noticeId: 1, title: 1, createdAt: 1, content: 1 }
    );
    return notice;
  }
}

export default NoticeModel;
