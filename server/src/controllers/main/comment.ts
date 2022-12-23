import { Router } from "express";
import { userService, commentService } from "../../services";

const commentController = Router();

commentController.post("/", async (req, res, next) => {
  const { email } = req.user;
  try {
    const author = await userService.getAuthor(email);
    await commentService.create(req.body, author);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
commentController.put("/:commentId", async (req, res, next) => {
  const { commentId } = req.params;
  const { email } = req.user;
  try {
    await commentService.checkAuthor(commentId, email);
    await commentService.update(commentId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
commentController.delete("/:commentId", async (req, res, next) => {
  const { commentId } = req.params;
  const { email } = req.user;
  try {
    await commentService.checkAuthor(commentId, email);
    await commentService.delete(commentId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default commentController;
