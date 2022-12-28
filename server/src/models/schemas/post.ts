import { Schema } from "mongoose";
import { Post } from "../../interfaces";
import { nanoid } from "nanoid";

const postSchema = new Schema<Post>(
  {
    postId: {
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
      _id: false,
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
    thumbnail: { type: String, required: true },
    duration: { type: [String], required: true },
    hopeGender: { type: String, required: true },
    hopeAge: { type: [String], required: true },
    userCount: { type: Number, required: true },
    contact: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
  },
  {
    collection: "posts",
    timestamps: true,
  }
);

export default postSchema;
