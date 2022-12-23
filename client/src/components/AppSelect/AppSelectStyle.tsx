import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Div = styled.div`
  margin: 10px 0;
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
  font-family: "S-CoreDream-3Light";

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
  }
`;

export const Label = styled.label`
  align-self: center;
  margin-right: 15px;
`;
