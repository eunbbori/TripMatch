import { CommentType } from "./comment";

export interface FreepostType {
  id: number;
  author: AuthorType;
  region: string;
  category: string;
  title: string;
  content: string;
  comments: CommentType[];
  createdAt: string;
}

export interface AuthorType {
  email: string;
  nickname: string;
  profileImg: string;
}
