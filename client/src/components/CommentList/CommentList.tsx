import React, { useEffect, useState } from "react";
import { useCreateCommentMutation } from "../../slice/commentApi";
import type { CommentType } from "../../type/comment";
import Comment from "./../Comment/Comment";
import { Button, CommentCount, Form, Textarea } from "./CommentListStyle";
import { useLocation } from "react-router-dom";

interface CommentListProps {
  setDeleteCommentId: React.Dispatch<React.SetStateAction<string>>;
  comments: CommentType[];
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  setDeleteCommentId,
}) => {
  const [commentInput, setCommentInput] = useState("");

  const [onCreateComment, { isError: isErrorCreateComment }] =
    useCreateCommentMutation();

  const location = useLocation();

  const currentPath = location.pathname.split("/").slice(1, 3);

  useEffect(() => {
    if (isErrorCreateComment) {
      alert("댓글 작성에 실패했습니다.");
    }
  }, [isErrorCreateComment]);

  const onSubmitComment = () => {
    const path = currentPath[0] === "free" ? "communityId" : "postId";
    onCreateComment({
      content: commentInput,
      [path]: currentPath[1],
    });
  };

  return (
    <>
      <CommentCount>
        <span>{comments.length}</span>개의 답변
      </CommentCount>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.commentId}
          setDeleteCommentId={setDeleteCommentId}
        />
      ))}
      {sessionStorage.getItem("x-access-token") && (
        <Form onSubmit={onSubmitComment}>
          <Textarea
            rows={5}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <Button commentForm>작성</Button>
        </Form>
      )}
    </>
  );
};

export default CommentList;
