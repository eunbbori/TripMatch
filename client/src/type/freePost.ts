import { CommentType } from "./comment";

export interface FreePostType {
  communityId?: string;
  author?: AuthorType;
  region: string;
  category: string;
  title: string;
  content: string;
  comments?: CommentType[];
  createdAt?: string;
}

export interface AuthorType {
  email: string;
  nickname: string;
  profileImg: string;
}
