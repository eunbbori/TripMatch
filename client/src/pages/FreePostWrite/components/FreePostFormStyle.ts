import styled from "styled-components";
import Theme from "../../../styles/Theme";

export const TitleContainer = styled.div`
  display: flex;
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

export const TitleInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-left: 10px;
  text-indent: 10px;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
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

  + button {
    margin-left: 20px;
  }
`;
