import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import Comment from "../../components/CommentList/CommentList";
import NotFound from "../../components/NotFound/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApplyMatchMutation,
  useCancelMatchMutation,
  useDeleteMatchPostMutation,
  useGetMatchPostQuery,
} from "../../slice/matchPostApi";
import { useAppSelector } from "../../store/hooks";
import Modal from "../../components/Modal/Modal";
import { useDeleteCommentMutation } from "../../slice/commentApi";
import ThumbnailModal from "./components/ThumbnailModal";
import authAxios from "../../axios/authAxios";

const MatchPostDetail = () => {
  // const [post, setPost] = useState<MatchPostType>();
  const [isApplying, setIsApplying] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState("");
  const [matchId, setMatchId] = useState("");
  const [openThumbnail, setOpenThumbnail] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const postquery = useGetMatchPostQuery(id);
  const { data: matchPost, isError } = postquery;
  const [onDeletePost] = useDeleteMatchPostMutation();
  const [onDeleteComment, { isSuccess: isSuccessDeleteComment }] =
    useDeleteCommentMutation();

  const [onApplyMatch, { isSuccess: isSuccessApplyMatch }] =
    useApplyMatchMutation();
  const [onCancleMatch] = useCancelMatchMutation();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);

  // 페이지 첫 렌더링시 동행 신청중인 글인지 확인함
  useEffect(() => {
    const getMatchPost = async () => {
      const result = await authAxios.get(
        "http://34.64.156.80:3003/api/main/mypage/myEnroll",
      );

      if (result.data) {
        const currentMatch = result.data.find(
          (post: { postId: string }) => post.postId === id,
        );

        currentMatch && setIsApplying(true);
        currentMatch && setMatchId(currentMatch.matchId);
      }
    };

    sessionStorage.getItem("x-access-token") && getMatchPost();
  }, [id]);

  useEffect(() => {
    const getMatchPost = async () => {
      const result = await authAxios.get(
        "http://34.64.156.80:3003/api/main/mypage/myEnroll",
      );

      if (result.data) {
        const currentMatch = result.data.find(
          (post: { postId: string }) => post.postId === id,
        );

        currentMatch && setIsApplying(true);
        currentMatch && setMatchId(currentMatch.matchId);
      }
    };

    isSuccessApplyMatch && getMatchPost();
  }, [id, isSuccessApplyMatch]);

  useEffect(() => {
    if (isSuccessDeleteComment) {
      window.location.reload();
    }
  }, [isSuccessDeleteComment]);

  const onClickApplyMatch = () => {
    onApplyMatch(id!);
    setIsApplying(!isApplying);
  };

  const onClickCancleMatch = () => {
    onCancleMatch(matchId);
    setIsApplying(!isApplying);
  };

  const onClickDeletePost = () => {
    onDeletePost(id);
    navigate("/match");
  };

  const onClickDeleteComment = () => {
    onDeleteComment(deleteCommentId);
  };

  const getModalCallback = () => {
    if (modalText) {
      switch (modalText.title) {
        case "삭제":
          return onClickDeletePost;
        case "동행 신청":
          return onClickApplyMatch;
        case "동행 신청 취소":
          return onClickCancleMatch;
        case "댓글 삭제":
          return onClickDeleteComment;
        case "로그인":
          return () => navigate("/login");
      }
    }
  };

  const onToggleThumbnail = useCallback(() => {
    setOpenThumbnail(!openThumbnail);
  }, [openThumbnail]);

  if (isError) {
    return <NotFound />;
  }

  return (
    <Container>
      {matchPost?.post && (
        <PostDetail
          matchPost={matchPost.post}
          user={matchPost.post.author}
          isApplying={isApplying}
          setMatchId={setMatchId}
          setOpenThumbnail={setOpenThumbnail}
        />
      )}
      {matchPost?.comments && (
        <Comment
          comments={matchPost.comments}
          setDeleteCommentId={setDeleteCommentId}
        />
      )}
      {isShown && <Modal callBackFn={getModalCallback()} />}
      {openThumbnail && (
        <ThumbnailModal
          onToggleThumbnail={onToggleThumbnail}
          imgUrl={matchPost!.post.thumbnail}
        />
      )}
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 11vh;
`;
