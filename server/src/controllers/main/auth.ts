import { Router } from "express";
import { userService } from "../../services";
import { loginCheck } from "../../middlewares";

const authController = Router();

authController.post("/email", async (req, res, next) => {
  const { email } = req.body;
  try {
    await userService.checkEmail(email);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/certify", async (req, res, next) => {
  const { email, authNumber } = req.body;
  try {
    await userService.checkNumber(email, authNumber);
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
  const { email, password } = req.body;
  try {
    const result = await userService.login(email, password);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});
authController.get("/refresh", async (req, res, next) => {
  let accessToken = req.headers["x-access-token"];
  if (!accessToken || accessToken === "null") return next(new Error("401"));
  accessToken = String(accessToken).split("Bearer ")[1];
  const refresh = String(req.headers["refresh"]);
  try {
    const newToken = await userService.refresh(accessToken, refresh);
    res.status(200).json(newToken);
  } catch (err) {
    next(new Error("401"));
  }
});
authController.get("/:email", async (req, res, next) => {
  const { email } = req.params;
  try {
    const user = await userService.getUser(email);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});
authController.delete("/delete", loginCheck, async (req, res, next) => {
  try {
    await userService.delete(req.email);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
authController.put("/update", loginCheck, async (req, res, next) => {
  try {
    await userService.update(req.email, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default authController;
