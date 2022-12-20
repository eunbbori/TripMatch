import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares";
import controller from "./controllers";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const app = express();
const swaggerYaml = YAML.load(path.join(__dirname, "./swagger/swagger.yaml"));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", controller);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerYaml));
app.use((req, res, next) => next(new Error("404")));
app.use(errorHandler);

export default app;
