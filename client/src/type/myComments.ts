import { DateType } from "./duration";

export interface PostType {
  postId: number;
  author: PostAuthorType;
  region: string;
  title: string;
  duration: DateType[];
  createdAt: Date;
}

export interface PostAuthorType {
  authorId: number;
  nickname: string;
  profileImg?: string;
}
