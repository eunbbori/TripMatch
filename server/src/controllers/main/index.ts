import { Router } from "express";
import authController from "./auth";
import communitiesController from "./communities";
import commentController from "./comment";
import postsController from "./posts";
import likesController from "./likes";
import searchController from "./search";
import noticesController from "./notices";
import matchesController from "./matches";
import mypageController from "./mypage";
import { loginCheck } from "../../middlewares";
import infoesController from "./infoes";

const mainController = Router();

mainController.use("/auth", authController);
mainController.use("/communities", communitiesController);
mainController.use("/comment", loginCheck, commentController);
mainController.use("/posts", postsController);
mainController.use("/likes", loginCheck, likesController);
mainController.use("/search", searchController);
mainController.use("/notices", noticesController);
mainController.use("/matches", loginCheck, matchesController);
mainController.use("/mypage", loginCheck, mypageController);
mainController.use("/infoes", infoesController);

export default mainController;
