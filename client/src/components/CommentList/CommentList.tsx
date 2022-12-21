import React from "react";
import type { CommentType } from "../../type/comment";
import Comment from "./../Comment/Comment";
import { Button, CommentCount, Form, Textarea } from "./CommentListStyle";

const CommentList: React.FC<{ comments: CommentType[] }> = ({ comments }) => {
  return (
    <>
      <CommentCount>
        <span>{comments.length}</span>개의 답변
      </CommentCount>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
      <Form>
        <Textarea rows={5} />
        <Button commentForm>작성</Button>
      </Form>
    </>
  );
};

export default CommentList;
