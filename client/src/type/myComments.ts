export interface CommentType {
  postId: string;
  author: CommentAuthorType;
  region: string;
  title: string;
  duration: string[];
}

export interface CommentAuthorType {
  email: string;
  nickname: string;
  profileImg: string;
}
