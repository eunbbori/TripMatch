import React from "react";
import styled from "styled-components";

const CommentForm = () => {
  return (
    <Form>
      <Textarea rows={5} />
      <Button>작성</Button>
    </Form>
  );
};

export default CommentForm;

const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  width: calc(100% - 30px);
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  padding: 10px 15px;

  &:focus {
    outline-color: ${(props) => props.theme.color.blue};
  }
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;
  align-self: end;
`;
