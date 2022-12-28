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
      _id: false,
    },
    applicant: {
      type: { email: String, nickname: String, profileImg: String },
      required: true,
      _id: false,
    },
    matchStatus: {
      type: String,
      required: true,
      default: "대기중",
      enum: ["대기중", "수락", "거절"],
    },
    scoredByAuthor: { type: Boolean, required: true, default: false },
    scoredByApplicant: { type: Boolean, required: true, default: false },
    endDate: { type: String, required: true },
  },
  {
    collection: "matches",
    timestamps: true,
  }
);

export default matchSchema;
