import { Router } from "express";
import { userService } from "../../services";

const usersController = Router();

usersController.get("/", async (req, res, next) => {
  const { keyword } = req.query;
  try {
    const users = await userService.getUserList(keyword as string);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});
usersController.delete("/:email", async (req, res, next) => {
  const { email } = req.params;
  try {
    await userService.delete(email);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
usersController.put("/:email", async (req, res, next) => {
  const { email } = req.params;
  try {
    await userService.update(email, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default usersController;
