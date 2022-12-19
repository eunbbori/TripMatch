import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Div = styled.div`
  margin: 10px 0;
  display: flex;
`;

export const Input = styled.input`
  flex-grow: 1;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-indent: 10px;
  height: 40px;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
  }
`;

export const Label = styled.label`
  align-self: center;
  margin-right: 15px;
`;
