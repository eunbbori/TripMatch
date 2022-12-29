import React, { useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Comment from "../../components/CommentList/CommentList";
import pointer from "../../images/temporaryIconPointer.png";
import {
  useDeleteFreePostMutation,
  useGetFreePostQuery,
} from "../../slice/freePostApi";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import { useAppSelector } from "../../store/hooks";
import Modal from "../../components/Modal/Modal";
import { useDeleteCommentMutation } from "../../slice/commentApi";

const FreePostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const postquery = useGetFreePostQuery(id);
  const { data: post, isError } = postquery;
  const [onDeletePost, { isError: isErrorDeletePost }] =
    useDeleteFreePostMutation();
  const [
    onDeleteComment,
    { isError: isErrorDeleteComment, isSuccess: isSuccessDeleteComment },
  ] = useDeleteCommentMutation();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);

  const [deleteCommentId, setDeleteCommentId] = useState("");

  // useGetAllFreePostQuery 예시
  // const { data, isLoading, isError } = useGetAllFreePostQuery({ page: 0, region: "서울" });

  useEffect(() => {
    if (isErrorDeleteComment) {
      alert("댓글 삭제에 실패했습니다.");
    } else if (isErrorDeletePost) {
      alert("게시글 삭제에 실패했습니다.");
    } else if (isSuccessDeleteComment) {
      window.location.reload();
    }
  }, [isErrorDeleteComment, isErrorDeletePost, isSuccessDeleteComment]);

  const onClickDeletePost = () => {
    onDeletePost(id);
    navigate("/free");
  };

  const onClickDeleteComment = () => {
    onDeleteComment(deleteCommentId);
  };

  const getModalCallback = () => {
    if (modalText) {
      switch (modalText.title) {
        case "삭제":
          return onClickDeletePost;
        case "댓글 삭제":
          return onClickDeleteComment;
      }
    }
  };

  if (isError) {
    return <NotFound />;
  }

  return (
    <Container>
      <div>
        <CategoryName>
          <Pointer src={pointer} />
          {post?.community.region} &gt; {post?.community.category}
        </CategoryName>
      </div>
      <PostDetail user={post?.community.author} freePost={post?.community} />
      {post?.comments && (
        <Comment
          comments={post?.comments}
          setDeleteCommentId={setDeleteCommentId}
        />
      )}

      {isShown && <Modal callBackFn={getModalCallback()} />}
    </Container>
  );
};

export default FreePostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 15vh;
`;

const CategoryName = styled.span`
  font-size: 12px;
  color: #747474;
  display: flex;
  align-items: center;
`;

const Pointer = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;
