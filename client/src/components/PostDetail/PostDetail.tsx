import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import {
  Thumbnail,
  ThumbnailImg,
  PostTitle,
  MatchStatus,
  UserContainer,
  Date,
  MatchContainer,
  PostContent,
  MatchButton,
  ButtonContainer,
  Button,
} from "./style";

interface PostDetailProps {
  matchData?: any;
  freePost?: any;
  user?: any;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchData,
  user,
  freePost,
}) => {
  return (
    <div>
      {matchData && (
        <Thumbnail>
          <ThumbnailImg src={matchData.thumbnailImg} />
        </Thumbnail>
      )}
      <PostTitle>
        {matchData && (
          <MatchStatus status={matchData.status === "모집중"}>
            {matchData.status}
          </MatchStatus>
        )}
        {freePost?.title}
      </PostTitle>
      <UserContainer>
        <UserProfile user={user} />
        <Date>2022-12-12 02:19</Date>
      </UserContainer>
      {matchData && (
        <MatchContainer>
          <p>
            <span>지역</span>
            {matchData.region}
          </p>
          <p>
            <span>기간</span>
            {`${matchData.duration[0]} ~ ${matchData.duration[1]}`}
          </p>
          <p>
            <span>모집 인원</span>
            {matchData.userCount}명
          </p>
          <p>
            <span>희망 성별</span>
            {matchData.hopeGender}
          </p>
          <p>
            <span>희망 연령대</span>
            {matchData.hopeAge}
          </p>
        </MatchContainer>
      )}
      <PostContent
        dangerouslySetInnerHTML={freePost && { __html: freePost.content }}
      ></PostContent>
      {matchData && <MatchButton>동행 신청하기</MatchButton>}
      <ButtonContainer>
        <Button>목록</Button>
        <Button>글수정</Button>
        <Button>글삭제</Button>
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
