import styled from "styled-components";
import Theme from "../../styles/Theme";
import { AppButtonProps } from "./AppButton";

export const Button = styled.button<AppButtonProps>`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  color: #333;
  background: ${Theme.color.blue};
  font-weight: bold;

  &:hover {
    background-color: ${Theme.color.lightblue};
  }
`;
