export default interface Post {
  postId: string;
  author: { email: string; nickname: string; profileImg: string };
  title: string;
  content: string;
  region: string;
  thumbnail: string;
  duration: [string];
  hopeGender: string;
  hopeAge: string;
  userCount: number;
  contact: string;
  status: boolean;
}
