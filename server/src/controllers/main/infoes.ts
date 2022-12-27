import { Router } from "express";
import { festivalService } from "../../services";

const infoesController = Router();

infoesController.get("/festival", async (req, res, next) => {
  try {
    const festivals = await festivalService.getAll();
    res.status(200).json(festivals);
  } catch (err) {
    next(err);
  }
});

export default infoesController;
