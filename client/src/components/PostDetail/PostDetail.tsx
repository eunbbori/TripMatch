import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { dateFormat } from "../../util/dateFormatting";
import ProfileModal from "../ProfileModal/ProfileModal";

interface PostDetailProps {
  matchPost?: MatchPostType;
  freePost?: FreePostType;
  user?: AuthorType;
  isApplying?: boolean;
  setMatchId?: React.Dispatch<React.SetStateAction<string>>;
}

const PostDetail: React.FC<PostDetailProps> = ({
  matchPost,
  user,
  freePost,
  isApplying,
}) => {
  const location = useLocation();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [isLikePost, setIsLikePost] = useState(false);
  const [clickLikePost, setClickLikePost] = useState(false);

  const [isAuthor, setIsAuthor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  // 하트를 클릭하면 좋아요 post/delete 요청을 보냄
  useEffect(() => {
    const fetchLikePost = async () => {
      if (isLikePost && clickLikePost) {
        await axios.post("http://34.64.156.80:3003/api/main/likes/like", {
          postId: id,
        });
      } else if (!isLikePost && clickLikePost) {
        await axios.delete("http://34.64.156.80:3003/api/main/likes/like", {
          params: { postId: id },
        });
      }
    };
    fetchLikePost();
  }, [clickLikePost, id, isLikePost]);

  // 이미 좋아요를 누른 게시글이면 setIsLikePost(true)
  useEffect(() => {
    const getLikePost = async () => {
      const result = await axios.get("http://34.64.156.80:3003/api/main/likes");

      if (result.data) {
        const currentLike = result.data.find(
          (post: { postId: string }) => post.postId === id,
        );

        currentLike && setIsLikePost(true);
      }
    };
    sessionStorage.getItem("x-access-token") && getLikePost();
  }, [id, isLikePost]);

  // 로그인한 유저가 운영자나 글 작성자인지 체크함
  useEffect(() => {
    const currentPost = matchPost || freePost;

    setIsAuthor(sessionStorage.getItem("email") === currentPost?.author?.email);
    setIsAdmin(sessionStorage.getItem("role") === "admin");
  }, [freePost, matchPost]);

  const onToggleLikes = async () => {
    setIsLikePost(!isLikePost);
    setClickLikePost(true);
  };

  const onClickApply = () => {
    if (!sessionStorage.getItem("x-access-token")) {
      dispatch(
        showModal({
          title: "로그인",
          content: "로그인 후 사용 가능한 기능입니다. 로그인 하시겠습니까?",
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
          <button
            className="heart"
            onClick={onToggleLikes}
            disabled={!sessionStorage.getItem("x-access-token")}
          >
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
        <MatchButton onClick={onClickApply} isApplying={isApplying!}>
          {isApplying ? "동행 신청 중" : "동행 신청하기"}
        </MatchButton>
      )}
      <ButtonContainer>
        <Link to={getListPathname()}>
          <Button>목록</Button>
        </Link>
        {isAuthor || isAdmin ? (
          <>
            <Link to={getUpdatePathname()} state={freePost || matchPost}>
              <Button>글수정</Button>
            </Link>
            <Button onClick={onClickDelete}>글삭제</Button>
          </>
        ) : null}
      </ButtonContainer>
    </div>
  );
};

export default PostDetail;
