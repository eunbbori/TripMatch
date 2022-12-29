import styled from "styled-components";
import Theme from "../../../styles/Theme";

export const TitleContainer = styled.div`
  display: flex;

  div {
    + div {
      margin-left: 10px;
    }
  }
`;

export const Select = styled.select`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #333;
  width: 100px;
  height: 40px;
  outline: none;
  text-indent: 10px;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
  }

  + select {
    margin-left: 10px;
  }
`;

export const TitleInputBox = styled.div`
  flex-grow: 1;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    text-indent: 10px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border: 2px solid ${Theme.color.blue};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  outline: none;
  width: 100px;
  height: 40px;
  background-color: ${Theme.color.lightblue};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: "S-CoreDream-3Light";

  + button {
    margin-left: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
  }
`;
