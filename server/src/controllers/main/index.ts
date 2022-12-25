import { Router } from "express";
import authController from "./auth";
import communitiesController from "./communities";
import commentController from "./comment";
import postsController from "./posts";
import likesController from "./likes";
import searchController from "./search";
import noticesController from "./notices";
import matchesController from "./matches";

const mainController = Router();

mainController.use("/auth", authController);
mainController.use("/communities", communitiesController);
mainController.use("/comment", commentController);
mainController.use("/posts", postsController);
mainController.use("/likes", likesController);
mainController.use("/search", searchController);
mainController.use("/notices", noticesController);
mainController.use("/matches", matchesController);

export default mainController;
