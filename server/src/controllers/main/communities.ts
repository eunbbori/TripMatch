import { Router } from "express";
import { communityService, commentService, userService } from "../../services";

const communitiesController = Router();

communitiesController.get("/", async (req, res, next) => {
  const { page, region } = req.query;
  try {
    const totalPage = await communityService.getTotalPage(region as string);
    const communities = await communityService.getTenCommus(
      Number(page) || 1,
      region as string
    );
    res.status(200).json({ totalPage, communities });
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
communitiesController.put("/:communityId", async (req, res, next) => {
  const { communityId } = req.params;
  try {
    const community = await communityService.getCommunity(communityId);
    if (community?.author.email !== req.email) return next(new Error("403"));
    await communityService.update(communityId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
communitiesController.delete("/:communityId", async (req, res, next) => {
  const { communityId } = req.params;
  try {
    const community = await communityService.getCommunity(communityId);
    if (community?.author.email !== req.email) return next(new Error("403"));
    await communityService.delete(communityId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
communitiesController.post("/community", async (req, res, next) => {
  try {
    const author = await userService.getAuthor(req.email);
    await communityService.create(req.body, author);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default communitiesController;
