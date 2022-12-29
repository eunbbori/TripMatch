import { Schema } from "mongoose";
import { Like } from "../../interfaces";

const likeSchema = new Schema<Like>(
  {
    email: { type: String, required: true },
    postId: { type: String, required: true },
  },
  {
    collection: "likes",
    timestamps: true,
  }
);

export default likeSchema;
