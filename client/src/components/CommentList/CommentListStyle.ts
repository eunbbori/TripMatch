import styled, { css } from "styled-components";

export const CommentCount = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;

  span {
    color: ${(props) => props.theme.color.pink};
    font-weight: bold;
  }
`;

export const Button = styled.button<{ commentForm?: boolean }>`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;

  + button {
    margin-left: 15px;
  }

  ${(props) =>
    props.commentForm &&
    css`
      margin-top: 10px;
      align-self: end;
    `}
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: calc(100% - 30px);
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  padding: 10px 15px;

  &:focus {
    outline-color: ${(props) => props.theme.color.blue};
  }
`;
