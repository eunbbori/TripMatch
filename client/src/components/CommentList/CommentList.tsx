import React, { useEffect, useState } from "react";
import { useCreateCommentMutation } from "../../slice/commentApi";
import type { CommentType } from "../../type/comment";
import Comment from "./../Comment/Comment";
import { Button, CommentCount, Form, Textarea } from "./CommentListStyle";
import { useLocation } from "react-router-dom";

const CommentList: React.FC<{ comments: CommentType[] }> = ({ comments }) => {
  const [commentInput, setCommentInput] = useState("");

  const [onCreateComment, { isError, isLoading }] = useCreateCommentMutation();

  const location = useLocation();

  const currentPath = location.pathname.split("/").slice(1, 3);

  useEffect(() => {
    if (isError) {
      alert("댓글 작성에 실패했습니다.");
    }
  }, [isError]);

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateComment({
      content: commentInput,
      [currentPath[0]]: currentPath[1],
    });
  };

  return (
    <>
      <CommentCount>
        <span>{comments.length}</span>개의 답변
      </CommentCount>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.commentId} />
      ))}
      <Form onSubmit={onSubmitComment}>
        <Textarea rows={5} onChange={(e) => setCommentInput(e.target.value)} />
        <Button commentForm>작성</Button>
      </Form>
    </>
  );
};

export default CommentList;
