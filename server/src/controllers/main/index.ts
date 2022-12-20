import { Router } from "express";
import authController from "./auth";

const mainController = Router();

mainController.use("/auth", authController);

export default mainController;
