import { Router } from "express";
import { matchService, postService, userService } from "../../services";

const matchesController = Router();

matchesController.post("/match", async (req, res, next) => {
  const { postId } = req.body;
  try {
    const author = await postService.getAuthor(postId);
    const applicant = await userService.getAuthor(req.email);
    await matchService.create({ postId, author: author?.author, applicant });
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
matchesController.delete("/:matchId", async (req, res, next) => {
  const { matchId } = req.params;
  try {
    await matchService.checkApplicant(matchId, req.email);
    await matchService.delete(matchId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
matchesController.put("/:matchId/score", async (req, res, next) => {
  const { matchId } = req.params;
  const { authorEmail, applicantEmail } = req.query;
  try {
    if (authorEmail) {
      await matchService.checkApplicant(matchId, req.email);
      await matchService.update(matchId, { scoredByApplicant: true });
      await userService.update(authorEmail as string, {
        $push: { matchPoints: req.body.matchPoint },
      });
    }
    if (applicantEmail) {
      await matchService.checkAuthor(matchId, req.email);
      await matchService.update(matchId, { scoredByAuthor: true });
      await userService.update(applicantEmail as string, {
        $push: { matchPoints: req.body.matchPoint },
      });
    }
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default matchesController;
