import { Router } from "express";
import { userService, commentService } from "../../services";

const commentController = Router();

commentController.post("/", async (req, res, next) => {
  try {
    const author = await userService.getAuthor(req.email);
    await commentService.create(req.body, author);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
commentController.put("/:commentId", async (req, res, next) => {
  const { commentId } = req.params;
  try {
    await commentService.checkAuthor(commentId, req.email);
    await commentService.update(commentId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
commentController.delete("/:commentId", async (req, res, next) => {
  const { commentId } = req.params;
  try {
    await commentService.checkAuthor(commentId, req.email);
    await commentService.delete(commentId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default commentController;
