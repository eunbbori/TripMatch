import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import Comment from "../../components/CommentList/CommentList";
import axios from "axios";
import type { MatchPostType } from "../../type/matchPost";
import NotFound from "../../components/NotFound/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApplyMatchMutation,
  useCancelMatchMutation,
  useDeleteMatchPostMutation,
  useGetAllMatchPostQuery,
  useGetMatchPostQuery,
} from "../../slice/matchPostApi";
import { useAppSelector } from "../../store/hooks";
import Modal from "../../components/Modal/Modal";
import { useDeleteCommentMutation } from "../../slice/commentApi";

const MatchPostDetail = () => {
  // const [post, setPost] = useState<MatchPostType>();
  const [isApplying, setIsApplying] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState("");
  const [matchId, setMatchId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const postquery = useGetMatchPostQuery(id);
  const { data: matchPost, isLoading, isError } = postquery;
  const [onDeletePost, { isError: isErrorDeletePost }] =
    useDeleteMatchPostMutation();
  const [onDeleteComment, { isError: isErrorDeleteComment }] =
    useDeleteCommentMutation();

  const [onApplyMatch, { isError: isErrorApplyMatch }] =
    useApplyMatchMutation();
  const [onCancleMatch, { isError: isErrorCancleMatch }] =
    useCancelMatchMutation();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);

  useEffect(() => {
    const getMatchPost = async () => {
      const result = await axios.get(
        "http://34.64.156.80:3003/api/main/mypage/myEnroll",
      );

      if (result.data) {
        const currentMatch = result.data.find(
          (post: { postId: string }) => post.postId === id,
        );

        currentMatch && setIsApplying(true);
        currentMatch && setMatchId(currentMatch.matchId);
      }
      console.log("dd");
    };

    sessionStorage.getItem("x-access-token") && getMatchPost();
  }, [id]);

  const onClickApplyMatch = () => {
    console.log("동행 신청");
    onApplyMatch(id!);
    setIsApplying(!isApplying);
  };

  const onClickCancleMatch = () => {
    console.log("동행 취소");
    onCancleMatch(matchId);
    setIsApplying(!isApplying);
  };

  const onClickDeletePost = () => {
    console.log("삭제");
    onDeletePost(id);
    navigate("/free");
  };

  const onClickDeleteComment = () => {
    onDeleteComment(deleteCommentId);
    window.location.reload();
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
        />
      )}
      {matchPost?.comments && (
        <Comment
          comments={matchPost.comments}
          setDeleteCommentId={setDeleteCommentId}
        />
      )}
      {isShown && <Modal callBackFn={getModalCallback()} />}
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 11vh;
`;
