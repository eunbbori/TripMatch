import { Schema } from "mongoose";
import { Community } from "../../interfaces";
import { nanoid } from "nanoid";

const communitySchema = new Schema<Community>(
  {
    communityId: {
      type: String,
      default: () => {
        return nanoid();
      },
      require: true,
      index: true,
    },
    author: {
      type: { email: String, nickname: String, profileImg: String },
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    region: {
      type: String,
      required: true,
      enum: [
        "서울",
        "경기도",
        "강원도",
        "충청도",
        "경상도",
        "전라도",
        "제주도",
        "기타",
      ],
    },
    category: {
      type: String,
      required: true,
      enum: ["맛집", "액티비티", "교통", "숙소", "기타"],
    },
    commentCount: { type: Number, required: true, default: 0 },
  },
  {
    collection: "communities",
    timestamps: true,
  }
);

export default communitySchema;
