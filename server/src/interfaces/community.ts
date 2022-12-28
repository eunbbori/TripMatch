export default interface Community {
  communityId: string;
  author: { email: string; nickname: string; profileImg: string };
  title: string;
  content: string;
  region: string;
  category: string;
  commentCount: number;
}
