import { DateType } from "./duration";

export interface PostUserInfo {
  userId: number;
  nickname: string;
  profileImg?: string;
  tripCount?: number;
  score?: number;
  posts: PostType[];
}

export interface PostType {
  postId: number;
  region: string;
  title: string;
  duration: DateType[];
  createdAt: Date;
}
