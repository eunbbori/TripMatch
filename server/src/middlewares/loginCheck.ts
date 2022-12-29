import { Request, Response, NextFunction } from "express";
import { jwt } from "../utils";

export default async function loginCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let accessToken = req.headers["x-access-token"];
  if (!accessToken || accessToken === "null") return next(new Error("401"));
  accessToken = String(accessToken).split("Bearer ")[1];
  try {
    const decoded = await jwt.verify(accessToken);
    req.email = decoded.email;
    req.role = decoded.role;
    next();
  } catch (err) {
    next(new Error("401"));
  }
}
