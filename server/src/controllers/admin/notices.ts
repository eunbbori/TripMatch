import { Router } from "express";
import { noticeService } from "../../services";

const noticesController = Router();

noticesController.put("/:noticeId", async (req, res, next) => {
  const { noticeId } = req.params;
  try {
    await noticeService.update(noticeId, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
noticesController.delete("/:noticeId", async (req, res, next) => {
  const { noticeId } = req.params;
  try {
    await noticeService.delete(noticeId);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
noticesController.post("/notice", async (req, res, next) => {
  try {
    await noticeService.create(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default noticesController;
