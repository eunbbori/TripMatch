import { Request } from "express";

export default interface Req extends Request {
  email?: string;
  role?: string;
}
