import { AuthorType } from "./freePost";

export interface CommentType {
  id: number;
  user: AuthorType;
  comment: string;
  createdAt: string;
}
