import React from "react";
import styled from "styled-components";
// import { CommentType } from "../../pages/FreePostDetail/FreePostDetail";
import CommentContent from "./CommentContent";
import CommentForm from "./CommentForm";

const Comment: React.FC<{ comments?: any }> = ({ comments }) => {
  return (
    <>
      <CommentCount>
        <span>{comments?.length}</span>개의 답변
      </CommentCount>
      {comments?.map((comment: any) => (
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
