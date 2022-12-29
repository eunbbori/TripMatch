import "dotenv/config";
import mongoose from "mongoose";
import { redisClient } from "./src/utils";
import app from "./src/app";

const port = process.env.SERVER_PORT;
const mongoDB = process.env.MONGODB_URI as string;

mongoose.set("strictQuery", true);
mongoose.connect(mongoDB);
mongoose.connection.on("connected", () => console.log("mongoDB connected"));
mongoose.connection.on("error", (err) => console.log("Error[Mongoose]", err));
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
  mongoose.connect(mongoDB);
});

redisClient.connect().catch((err) => console.log("Error[Redis]", err));
redisClient.on("connect", () => console.log("redis connected"));
redisClient.on("error", (err) => console.log("Error[Redis]", err));
redisClient.on("end", () => {
  console.log("redis disconnected");
  redisClient.connect().catch((err) => console.log("Error[Redis]", err));
});

app.listen(port, () => console.log(`server started on ${port}`));
