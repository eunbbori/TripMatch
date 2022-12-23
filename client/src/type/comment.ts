import { AuthorType } from "./freePost";

export interface CommentType {
  commentId: string;
  author: AuthorType;
  content: string;
  createdAt: string;
}
