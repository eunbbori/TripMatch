import React from "react";
import styled from "styled-components";
import CommentContent from "./CommentContent";
import CommentForm from "./CommentForm";
import type { CommentType } from "./../../type/comment";

const Comment: React.FC<{ comments: CommentType[] | undefined }> = ({
  comments = [],
}) => {
  return (
    <>
      <CommentCount>
        <span>{comments.length}</span>개의 답변
      </CommentCount>
      {comments.map((comment) => (
        <CommentContent data={comment} key={comment.id} />
      ))}
      <CommentForm />
    </>
  );
};

export default Comment;

const CommentCount = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;

  span {
    color: ${(props) => props.theme.color.pink};
    font-weight: bold;
  }
`;
