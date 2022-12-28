import "dotenv/config";
import mongoose from "mongoose";
import { redisClient } from "./src/utils";
import app from "./src/app";

const port = process.env.SERVER_PORT;
const mongoDB = process.env.MONGODB_URI as string;

mongoose.set("strictQuery", true);
mongoose.connect(mongoDB);
mongoose.connection.on("connected", () => console.log("mongoDB connected"));

redisClient.connect().then();
redisClient.on("connect", () => console.log("redis connected"));
redisClient.on("end", () => console.log("redis disconnected"));
redisClient.on("error", (err) => console.log("Error[Redis]", err));

app.listen(port, () => console.log(`server started on ${port}`));
