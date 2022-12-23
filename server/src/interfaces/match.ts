export default interface Match {
  postId: string;
  author: { email: string; nickname: string; profileImg: string };
  applicant: { email: string; nickname: string; profileImg: string };
  status: string;
}
