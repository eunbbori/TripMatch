import { Router } from "express";
import {
  postService,
  likeService,
  commentService,
  userService,
} from "../../services";
import { loginCheck } from "../../middlewares";

const postsController = Router();

postsController.get("/", async (req, res, next) => {
  const { page, region, status, email } = req.query;
  try {
    const totalCount = await postService.getTotalCount(
      region as string,
      status as string
    );
    const posts = await postService.getEightPosts(
      Number(page) || 1,
      region as string,
      status as string
    );
    if (email) {
      const postsWithLike = await likeService.isLiked(
        posts as [],
        email as string
      );
      res.status(200).json({ totalCount, posts: postsWithLike });
    } else res.status(200).json({ totalCount, posts });
  } catch (err) {
    next(err);
  }
});
postsController.get("/:postId", async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await postService.getPost(postId);
    const comments = await commentService.getComments({ postId });
    res.status(200).json({ post, comments });
  } catch (err) {
    next(err);
  }
});
postsController.put("/:postId", loginCheck, async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await postService.getAuthor(postId);
    if (post?.author.email !== req.email) return next(new Error("403"));
    await postService.update(postId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
postsController.delete("/:postId", loginCheck, async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await postService.getAuthor(postId);
    if (post?.author.email !== req.email) return next(new Error("403"));
    await postService.delete(postId);
    await likeService.banish(postId);
    await commentService.banish({ postId });
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
postsController.post("/post", loginCheck, async (req, res, next) => {
  try {
    const author = await userService.getAuthor(req.email);
    await postService.create(req.body, author);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default postsController;
