import { Schema } from "mongoose";
import { Comment } from "../../interfaces";
import { nanoid } from "nanoid";

const commentSchema = new Schema<Comment>(
  {
    commentId: {
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
    content: { type: String, required: true },
    communityId: { type: String, required: false },
    postId: { type: String, required: false },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

export default commentSchema;
