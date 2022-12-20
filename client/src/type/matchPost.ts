import { CommentType } from "./comment";
import { AuthorType } from "./freePost";

export interface MatchPostType {
  id: number;
  author: AuthorType;
  region: string;
  userCount: number;
  hopeGender: string;
  hopeAge: string;
  title: string;
  content: string;
  status: boolean;
  duration: string[];
  thumbnailImg: string;
  comments: CommentType[];
  createdAt: string;
}
