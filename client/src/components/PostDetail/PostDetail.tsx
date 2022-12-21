import React, { useState } from "react";
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
import type { FreepostType, AuthorType } from "./../../type/freePost";
import type { MatchPostType } from "../../type/matchPost";
import DeleteModal from "./../DeleteModal/DeleteModal";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "./../../store/hooks";
import { showModal } from "../../slice/deleteModal";

interface PostDetailProps {
  matchPost?: MatchPostType;
  freePost?: FreepostType;
  user?: AuthorType;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
}) => {
  const location = useLocation();
  const isShown = useAppSelector((state) => state.modal.show);
  const dispatch = useAppDispatch();

  const [isLikePost, setIsLikePost] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  const onToggleLikes = async () => {
    setIsLikePost(!isLikePost);
    // await axios.post('') 좋아요 게시글 api 작성
  };

  const onClickApply = () => {
    setIsApplying(!isApplying);
    // await axios.post('') 동행 신청 api 작성
  };

  const getUpdatePathname = () =>
    location.pathname.includes("match")
      ? `/match/write/${matchPost?.id}`
      : `/free/write/${freePost?.id}`;

  const getListPathname = () =>
    location.pathname.includes("match") ? "/match" : "/free";

  const onClickDelete = () => {
    dispatch(showModal("게시글"));
  };

  return (
    <div>
      {matchPost && (
        <Thumbnail>
          <ThumbnailImg src={matchPost.thumbnailImg} />
        </Thumbnail>
      )}
      <PostTitle>
        <div>
          {matchPost && (
            <MatchStatus status={matchPost.status === true}>
              {matchPost.status ? "모집중" : "모집마감"}
            </MatchStatus>
          )}
          {freePost?.title || matchPost?.title}
        </div>
        {matchPost && (
          <img
            src={isLikePost ? fullHeart : emptyHeart}
            className="heart"
            onClick={() => onToggleLikes()}
          />
        )}
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
      {matchPost && (
        <MatchButton onClick={onClickApply} isApplying={isApplying}>
          {isApplying ? "동행 신청 중" : "동행 신청하기"}
        </MatchButton>
      )}
      <ButtonContainer>
        <Link to={getListPathname()}>
          <Button>목록</Button>
        </Link>
        <Link to={getUpdatePathname()} state={freePost || matchPost}>
          <Button>글수정</Button>
        </Link>
        <Button onClick={onClickDelete}>글삭제</Button>
      </ButtonContainer>
      {isShown && <DeleteModal />}
    </div>
  );
};

export default PostDetail;
