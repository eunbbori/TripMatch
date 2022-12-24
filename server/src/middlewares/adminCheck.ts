import { Request, Response, NextFunction } from "express";

export default function adminCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.role === "admin") next();
  else next(new Error("403"));
}
