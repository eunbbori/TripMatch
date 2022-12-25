import { Router } from "express";
import { matchService, postService, userService } from "../../services";

const matchesController = Router();

matchesController.post("/match", async (req, res, next) => {
  const { postId } = req.body;
  try {
    const author = await postService.getAuthor(postId);
    const applicant = await userService.getAuthor(req.email);
    await matchService.create({ postId, ...author, applicant });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
matchesController.put("/:matchId", async (req, res, next) => {
  const { matchId } = req.params;
  try {
    await matchService.checkAuthor(matchId, req.email);
    await matchService.update(matchId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
matchesController.put("/:matchId", async (req, res, next) => {
  const { matchId } = req.params;
  try {
    await matchService.checkApplicant(matchId, req.email);
    await matchService.delete(matchId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default matchesController;
