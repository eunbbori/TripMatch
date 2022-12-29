import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Link, useLocation, useParams } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import {
  Thumbnail,
  ThumbnailImg,
  PostTitle,
  MatchStatus,
  UserContainer,
  Date,
  MatchContainer,
  MatchButton,
  ButtonContainer,
  Button,
} from "./PostDetailStyle";
import type { FreePostType, AuthorType } from "./../../type/freePost";
import type { MatchPostType } from "../../type/matchPost";
import { useAppDispatch } from "./../../store/hooks";
import { showModal } from "../../slice/modal";
import { dateFormat } from "../../util/dateFormatting";
import authAxios from "../../axios/authAxios";
import MarkdownView from "../MarkdownView/MarkdownView";
import {
  useAddLikeMutation,
  useDeleteLikeMutation,
} from "../../slice/matchPostApi";

interface PostDetailProps {
  matchPost?: MatchPostType;
  freePost?: FreePostType;
  user?: AuthorType;
  isApplying?: boolean;
  setMatchId?: React.Dispatch<React.SetStateAction<string>>;
  setOpenThumbnail?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
  isApplying,
  setOpenThumbnail,
}) => {
  const location = useLocation();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [isLikePost, setIsLikePost] = useState(false);
  const [clickLikePost, setClickLikePost] = useState(false);

  const [isAuthor, setIsAuthor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [addLikePost] = useAddLikeMutation();
  const [deleteLikePost] = useDeleteLikeMutation();

  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  // 하트를 클릭하면 좋아요 post/delete 요청을 보냄
  useEffect(() => {
    const fetchLikePost = async () => {
      if (isLikePost && clickLikePost && id) {
        addLikePost(id);
      } else if (!isLikePost && clickLikePost && id) {
        deleteLikePost(id);
      }
    };
    location.pathname.includes("match") && fetchLikePost();
  }, [
    addLikePost,
    clickLikePost,
    deleteLikePost,
    id,
    isLikePost,
    location.pathname,
  ]);

  // 이미 좋아요를 누른 게시글이면 setIsLikePost(true)
  useEffect(() => {
    const getLikePost = async () => {
      const result = await authAxios.get("/api/main/likes");

      if (result.data) {
        const currentLike = result.data.find(
          (post: { postId: string }) => post?.postId === id,
        );

        currentLike && setIsLikePost(true);
      }
    };
    if (
      sessionStorage.getItem("x-access-token") &&
      !clickLikePost &&
      location.pathname.includes("match")
    ) {
      getLikePost();
    }
  }, [clickLikePost, id, isLikePost, location.pathname]);

  // 로그인한 유저가 운영자나 글 작성자인지 체크함
  useEffect(() => {
    const currentPost = matchPost || freePost;

    setIsAuthor(sessionStorage.getItem("email") === currentPost?.author?.email);
    setIsAdmin(sessionStorage.getItem("roleToken") === "admin");
  }, [freePost, matchPost]);

  const onToggleLikes = () => {
    if (!sessionStorage.getItem("x-access-token")) {
      dispatch(
        showModal({
          title: "로그인",
          content: "로그인 하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
      return;
    }
    setIsLikePost(!isLikePost);
    setClickLikePost(true);
  };

  const onClickApply = () => {
    if (!sessionStorage.getItem("x-access-token")) {
      dispatch(
        showModal({
          title: "로그인",
          content: "로그인 하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
    } else {
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
    }
  };

  const onClickDelete = () => {
    dispatch(
      showModal({
        title: "삭제",
        content: "이 게시글을 삭제하시겠습니까?",
        rightButton: "삭제",
      }),
    );
  };

  const getUpdatePathname = () =>
    location.pathname.includes("match")
      ? `/match/write/${matchPost?.postId}`
      : `/free/write/${freePost?.communityId}`;

  const getListPathname = () =>
    location.pathname.includes("match") ? "/match" : "/free";

  const getButtonsForUserType = () => {
    if (isAuthor) {
      return (
        <>
          <Link to={getUpdatePathname()} state={freePost || matchPost}>
            <Button>글수정</Button>
          </Link>
          <Button onClick={onClickDelete}>글삭제</Button>
        </>
      );
    } else if (!isAuthor && isAdmin) {
      return <Button onClick={onClickDelete}>삭제</Button>;
    } else if (!isAuthor && !isAdmin) {
      return;
    }
  };

  return (
    <div>
      {matchPost && (
        <Thumbnail>
          <ThumbnailImg
            src={matchPost.thumbnail}
            onClick={() => {
              setOpenThumbnail && setOpenThumbnail(true);
            }}
          />
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
          <button className="heart" onClick={onToggleLikes}>
            <img src={isLikePost ? fullHeart : emptyHeart} />
          </button>
        )}
      </PostTitle>
      <UserContainer>
        {user && <UserProfile user={user} />}
        <Date>
          {dateFormat(freePost?.createdAt || matchPost?.createdAt || "")}
        </Date>
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
            {matchPost.hopeAge.join(", ")}
          </p>
        </MatchContainer>
      )}
      <MarkdownView content={freePost?.content || matchPost?.content} />
      {matchPost && (
        <MatchButton
          onClick={onClickApply}
          isApplying={isApplying!}
          disabled={
            sessionStorage.getItem("email") === matchPost.author?.email ||
            matchPost.status === false
          }
        >
          {isApplying ? "동행 신청 중" : "동행 신청하기"}
        </MatchButton>
      )}
      <ButtonContainer>
        <Link to={getListPathname()}>
          <Button>목록</Button>
        </Link>
        {getButtonsForUserType()}
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
