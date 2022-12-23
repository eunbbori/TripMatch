import { Router } from "express";
import authController from "./auth";
import communitiesController from "./communities";
import commentController from "./comment";
import postsController from "./posts";
import likesController from "./likes";
import searchController from "./search";

const mainController = Router();

mainController.use("/auth", authController);
mainController.use("/communities", communitiesController);
mainController.use("/comment", commentController);
mainController.use("/posts", postsController);
mainController.use("/likes", likesController);
mainController.use("/search", searchController);

export default mainController;
