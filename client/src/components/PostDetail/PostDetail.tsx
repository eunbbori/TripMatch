import React, { useEffect, useState } from "react";
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
import type { FreePostType, AuthorType } from "./../../type/freePost";
import type { MatchPostType } from "../../type/matchPost";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "./../../store/hooks";
import { showModal } from "../../slice/modal";

interface PostDetailProps {
  matchPost?: MatchPostType;
  freePost?: FreePostType;
  user?: AuthorType;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
}) => {
  const location = useLocation();
  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const [isLikePost, setIsLikePost] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const [isAuthor, setIsAuthor] = useState(false);

  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  const onToggleLikes = async () => {
    setIsLikePost(!isLikePost);
    // await axios.post('') 좋아요 게시글 api 작성
  };

  useEffect(() => {
    const currentPost = matchPost || freePost;

    setIsAuthor(sessionStorage.getItem("email") === currentPost?.author?.email);
  }, [freePost, matchPost]);

  const onClickApply = () => {
    if (isApplying) {
      dispatch(
        showModal({
          title: "동행 신청 취소",
          content: "동행 신청을 취소하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
    } else {
      dispatch(
        showModal({
          title: "동행 신청",
          content: "동행을 신청하시겠습니까?",
          rightButton: "신청",
        }),
      );
    }

    // await axios.post('') 동행 신청 api 작성
  };

  const getUpdatePathname = () =>
    location.pathname.includes("match")
      ? "/match/write" //`/match/write/${matchPost?.postId}`
      : `/free/write/${freePost?.communityId}`;

  const getListPathname = () =>
    location.pathname.includes("match") ? "/match" : "/free";

  const onClickDelete = () => {
    dispatch(
      showModal({
        title: "삭제",
        content: "이 게시글을 삭제하시겠습니까?",
        rightButton: "삭제",
      }),
    );
  };

  const onDelete = () => {
    console.log("삭제");
  };

  const onApply = () => {
    console.log("동행 신청");
    setIsApplying(!isApplying);
  };

  const onApplyCancle = () => {
    console.log("동행 취소");
    setIsApplying(!isApplying);
  };

  const getModalCallback = () => {
    if (modalText) {
      switch (modalText.title) {
        case "삭제":
          return onDelete;
        case "동행 신청":
          return onApply;
        case "동행 신청 취소":
          return onApplyCancle;
      }
    }
  };

  return (
    <div>
      {matchPost && (
        <Thumbnail>
          <ThumbnailImg src={matchPost.thumbnail} />
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
        {user && <UserProfile user={user} />}
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
        {isAuthor && (
          <>
            <Link to={getUpdatePathname()} state={freePost || matchPost}>
              <Button>글수정</Button>
            </Link>
            <Button onClick={onClickDelete}>글삭제</Button>
          </>
        )}
      </ButtonContainer>
      {isShown && <Modal callBackFn={getModalCallback()} />}
    </div>
  );
};

export default PostDetail;
