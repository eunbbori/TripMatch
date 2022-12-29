import { Schema } from "mongoose";
import { Festival } from "../../interfaces";

const festivalSchema = new Schema<Festival>(
  {
    addr1: { type: String, required: false },
    eventstartdate: { type: String, required: true },
    eventenddate: { type: String, required: true },
    firstimage: { type: String, required: false },
    tel: { type: String, required: false },
    title: { type: String, required: true },
  },
  {
    collection: "festivals",
    timestamps: true,
  }
);

export default festivalSchema;
