export default interface Match {
  matchId: string;
  postId: string;
  author: { email: string; nickname: string; profileImg: string };
  applicant: { email: string; nickname: string; profileImg: string };
  matchStatus: string;
  scoredByAuthor: boolean;
  scoredByApplicant: boolean;
}
