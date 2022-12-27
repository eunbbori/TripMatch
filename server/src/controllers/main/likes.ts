import { Router } from "express";
import { likeService, postService } from "../../services";

const likesController = Router();

likesController.get("/", async (req, res, next) => {
  try {
    const likes = await likeService.getPostIds(req.email);
    const posts = await postService.getWishlist(likes as []);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});
likesController.post("/like", async (req, res, next) => {
  const email = req.email;
  const { postId } = req.body;
  try {
    await likeService.checkDuplicated({ email, postId });
    await likeService.create({ email, postId });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
likesController.delete("/like", async (req, res, next) => {
  const { postId } = req.query;
  try {
    await likeService.delete({ email: req.email, postId });
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default likesController;
