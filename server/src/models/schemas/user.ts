import { Schema } from "mongoose";
import { User } from "../../interfaces";

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true, index: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    introduce: { type: String, required: false },
    profileImg: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dv6tzjgu4/image/upload/v1671081256/elice/default-user_bvvgsf.png",
    },
    matchPoints: { type: [Number], required: true, default: [] },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export default userSchema;
