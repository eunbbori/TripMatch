import { Router } from "express";
import { communityService, postService, likeService } from "../../services";

const searchController = Router();

searchController.get("/", async (req, res, next) => {
  const { keyword, email } = req.query;
  try {
    const communities = await communityService.search(keyword as string);
    const posts = await postService.search(keyword as string);
    if (email) {
      const postsWithLike = await likeService.isLiked(
        posts as [],
        email as string
      );
      res.status(200).json({ communities, posts: postsWithLike });
    } else res.status(200).json({ communities, posts });
  } catch (err) {
    next(err);
  }
});

export default searchController;
