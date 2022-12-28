export default interface Comment {
  commentId: string;
  author: { email: string; nickname: string; profileImg: string };
  content: string;
  communityId?: string;
  postId?: string;
}
