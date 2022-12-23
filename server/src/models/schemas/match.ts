import { Schema } from "mongoose";
import { Match } from "../../interfaces";

const matchSchema = new Schema<Match>(
  {
    postId: { type: String, required: true },
    author: {
      type: { email: String, nickname: String, profileImg: String },
      required: true,
    },
    applicant: {
      type: { email: String, nickname: String, profileImg: String },
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "대기중",
      enum: ["대기중", "수락", "거절"],
    },
  },
  {
    collection: "matches",
    timestamps: true,
  }
);

export default matchSchema;
