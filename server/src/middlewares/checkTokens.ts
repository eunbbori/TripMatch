import { Response, NextFunction } from "express";
import { jwt, redis } from "../utils";
import { Req } from "../interfaces";

export default async function checkTokens(
  req: Req,
  res: Response,
  next: NextFunction
) {
  const { accessToken } = req.cookies;
  if (!accessToken) return next(new Error("401"));
  const { refresh } = req.headers;
  try {
    let decoded;
    if (refresh) {
      const { exp } = await jwt.verify(refresh as string);
      decoded = jwt.decode(accessToken);
      const correct = await redis.get(decoded.email);
      if (refresh !== correct) return next(new Error("401"));
      const newAccess = await jwt.create(
        { email: decoded.email, role: decoded.role },
        "1h"
      );
      res.cookie("accessToken", newAccess, {
        httpOnly: true,
        expires: new Date((exp as number) * 1000),
      });
    } else decoded = await jwt.verify(accessToken);
    req.email = decoded.email;
    req.role = decoded.role;
    next();
  } catch (err) {
    next(new Error("401"));
  }
}
