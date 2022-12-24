import { Router } from "express";
import mainController from "./main";
import adminController from "./admin";
import { loginCheck, adminCheck } from "../middlewares";

const controller = Router();

controller.use("/main", mainController);
controller.use("/admin", loginCheck, adminCheck, adminController);

export default controller;
