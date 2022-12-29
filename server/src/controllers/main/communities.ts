import { Router } from "express";
import { communityService, commentService, userService } from "../../services";
import { loginCheck } from "../../middlewares";

const communitiesController = Router();

communitiesController.get("/", async (req, res, next) => {
  const { page, region, keyword } = req.query;
  try {
    const totalCount = keyword
      ? 0
      : await communityService.getTotalCount(region as string);
    const communities = keyword
      ? await communityService.search(keyword as string)
      : await communityService.getTenCommus(
          Number(page) || 1,
          region as string
        );
    res
      .status(200)
      .json(keyword ? { communities } : { totalCount, communities });
  } catch (err) {
    next(err);
  }
});
communitiesController.get("/:communityId", async (req, res, next) => {
  const { communityId } = req.params;
  try {
    const community = await communityService.getCommunity(communityId);
    const comments = await commentService.getComments({ communityId });
    res.status(200).json({ community, comments });
  } catch (err) {
    next(err);
  }
});
communitiesController.put(
  "/:communityId",
  loginCheck,
  async (req, res, next) => {
    const { communityId } = req.params;
    try {
      await communityService.checkAuthor(communityId, req.email);
      await communityService.update(communityId, req.body);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
);
communitiesController.delete(
  "/:communityId",
  loginCheck,
  async (req, res, next) => {
    const { communityId } = req.params;
    try {
      await communityService.checkAuthor(communityId, req.email);
      await communityService.delete(communityId);
      await commentService.banish({ communityId });
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
);
communitiesController.post("/community", loginCheck, async (req, res, next) => {
  try {
    const author = await userService.getAuthor(req.email);
    await communityService.create(req.body, author);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default communitiesController;
