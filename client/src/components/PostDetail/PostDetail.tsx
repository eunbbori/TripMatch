import React from "react";
import { MatchPost } from "../../pages/MatchPostDetail/MatchPostDetail";
import { Link, useLocation } from "react-router-dom";
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
} from "./PostDetailStyle";
import type {
  Author,
  Freepost,
} from "../../pages/FreePostDetail/FreePostDetail";

interface PostDetailProps {
  matchPost?: MatchPost;
  freePost?: Freepost;
  user?: Author;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
}) => {
  const location = useLocation();

  const getUpdatePathname = () =>
    location.pathname.includes("match")
      ? `/match/write/${matchPost?.id}`
      : `/free/write/${freePost?.id}`;

  const getListPathname = () =>
    location.pathname.includes("match") ? "/match" : "/free";

  return (
    <div>
      {matchPost && (
        <Thumbnail>
          <ThumbnailImg src={matchPost.thumbnailImg} />
        </Thumbnail>
      )}
      <PostTitle>
        {matchPost && (
          <MatchStatus status={matchPost.status === true}>
            {matchPost.status}
          </MatchStatus>
        )}
        {freePost?.title || matchPost?.title}
      </PostTitle>
      <UserContainer>
        <UserProfile user={user} />
        <Date>{freePost?.createdAt || matchPost?.createdAt}</Date>
      </UserContainer>
      {matchPost && (
        <MatchContainer>
          <p>
            <span>지역</span>
            {matchPost.region}
          </p>
          <p>
            <span>기간</span>
            {`${matchPost.duration[0]} ~ ${matchPost.duration[1]}`}
          </p>
          <p>
            <span>모집 인원</span>
            {matchPost.userCount}명
          </p>
          <p>
            <span>희망 성별</span>
            {matchPost.hopeGender}
          </p>
          <p>
            <span>희망 연령대</span>
            {matchPost.hopeAge}
          </p>
        </MatchContainer>
      )}
      <PostContent
        dangerouslySetInnerHTML={
          (freePost && { __html: freePost.content }) ||
          (matchPost && { __html: matchPost.content })
        }
      ></PostContent>
      {matchPost && <MatchButton>동행 신청하기</MatchButton>}
      <ButtonContainer>
        <Link to={getListPathname()}>
          <Button>목록</Button>
        </Link>
        <Link to={getUpdatePathname()} state={freePost || matchPost}>
          <Button>글수정</Button>
        </Link>
        <Button>글삭제</Button>
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
