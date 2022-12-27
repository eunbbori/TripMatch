import styled from "styled-components";
import Theme from "../../styles/Theme";

export const RadioAndCheckBoxInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #333;
  outline: none;
  text-indent: 10px;

  &:focus {
    outline: none;
    border: 1px solid ${Theme.color.blue};
  }
`;

export const RadioAndCheckBoxLabel = styled.label`
  align-self: center;
  margin-right: 15px;
`;
