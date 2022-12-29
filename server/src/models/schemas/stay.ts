import { Schema } from "mongoose";
import { Stay } from "../../interfaces";

const staySchema = new Schema<Stay>(
  {
    addr1: { type: String, required: false },
    firstimage: { type: String, required: false },
    goodstay: { type: String, required: false },
    tel: { type: String, required: false },
    title: { type: String, required: true },
  },
  {
    collection: "stays",
    timestamps: true,
  }
);

export default staySchema;
