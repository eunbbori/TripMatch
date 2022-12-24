import { Router } from "express";
import { noticeService } from "../../services";

const noticesController = Router();

noticesController.get("/", async (req, res, next) => {
  try {
    const notices = await noticeService.findAll();
    res.status(200).json(notices);
  } catch (err) {
    next(err);
  }
});
noticesController.get("/:noticeId", async (req, res, next) => {
  const { noticeId } = req.params;
  try {
    const notice = await noticeService.findOne(noticeId);
    res.status(200).json(notice);
  } catch (err) {
    next(err);
  }
});

export default noticesController;
