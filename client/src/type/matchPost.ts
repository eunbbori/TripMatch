import { CommentType } from "./comment";
import { AuthorType } from "./freePost";

export interface MatchPostType {
  postId?: string;
  author?: AuthorType;
  region: string;
  userCount: number;
  hopeGender: string;
  hopeAge: string;
  title: string;
  content: string;
  status?: boolean;
  duration: string[];
  thumbnail: string;
  contact: string;
  like?: boolean;
  comments?: CommentType[];
  createdAt?: string;
}
