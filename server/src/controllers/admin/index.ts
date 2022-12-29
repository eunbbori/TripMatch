import { Router } from "express";
import usersController from "./users";
import noticesController from "./notices";

const adminController = Router();

adminController.use("/users", usersController);
adminController.use("/notices", noticesController);

export default adminController;
