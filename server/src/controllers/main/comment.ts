import { Router } from "express";
import { userService, commentService, communityService } from "../../services";

const commentController = Router();

commentController.post("/", async (req, res, next) => {
  const { communityId } = req.body;
  try {
    const author = await userService.getAuthor(req.email);
    await commentService.create(req.body, author);
    if (communityId)
      await communityService.update(communityId, { $inc: { commentCount: 1 } });
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
    const communityId = await commentService.getCommunityId(commentId);
    if (communityId)
      await communityService.update(communityId, {
        $inc: { commentCount: -1 },
      });
    await commentService.delete(commentId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default commentController;
