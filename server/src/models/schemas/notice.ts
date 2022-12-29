import { Schema } from "mongoose";
import { Notice } from "../../interfaces";
import { nanoid } from "nanoid";

const noticeSchema = new Schema<Notice>(
  {
    noticeId: {
      type: String,
      default: () => {
        return nanoid();
      },
      require: true,
      index: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    collection: "notices",
    timestamps: true,
  }
);

export default noticeSchema;
