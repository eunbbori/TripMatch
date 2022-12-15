import { Router } from "express";
import { userService } from "../../services";

const authController = Router();

authController.post("/email", async (req, res, next) => {
  try {
    await userService.checkEmail(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/certify", async (req, res, next) => {
  try {
    await userService.checkNumber(req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/join", async (req, res, next) => {
  try {
    await userService.join(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/login", async (req, res, next) => {
  try {
    const { accessToken, refresh } = await userService.login(req.body);
    res
      .status(201)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 1 * 3600 * 1000 * 24 * 7,
      })
      .json({ refresh });
  } catch (err) {
    next(err);
  }
});

export default authController;
