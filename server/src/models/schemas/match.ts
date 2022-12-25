import { Schema } from "mongoose";
import { Match } from "../../interfaces";
import { nanoid } from "nanoid";

const matchSchema = new Schema<Match>(
  {
    matchId: {
      type: String,
      default: () => {
        return nanoid();
      },
      require: true,
      index: true,
    },
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
