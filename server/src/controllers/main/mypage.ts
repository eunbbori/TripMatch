import { Router } from "express";
import {
  userService,
  commentService,
  postService,
  matchService,
} from "../../services";

const mypageController = Router();

mypageController.get("/", async (req, res, next) => {
  try {
    const user = await userService.getUser(req.email);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});
mypageController.get("/comments", async (req, res, next) => {
  try {
    const comments = await commentService.findByAuthor(req.email);
    const posts = await postService.getCommentlist(comments as []);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});
mypageController.get("/myEnroll", async (req, res, next) => {
  try {
    const matches = await matchService.getByApplicant(req.email);
    const posts = await postService.getMyEnroll(matches as []);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});
mypageController.get("/receivedEnroll", async (req, res, next) => {
  try {
    const matches = await matchService.getByAuthor(req.email);
    const posts = await postService.getRecvdEnroll(matches as []);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});
mypageController.get("/posts", async (req, res, next) => {
  try {
    const posts = await postService.getByAuthor(req.email);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});

export default mypageController;
