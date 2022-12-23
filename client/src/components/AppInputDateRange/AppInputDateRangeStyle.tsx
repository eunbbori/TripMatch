import styled from "styled-components";
import Theme from "../../styles/Theme";

export const DateRange = styled.div`
  margin: 10px 0;
  display: flex;
  p {
    align-self: center;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Label = styled.label`
  flex: none;
  align-self: center;
  margin-right: 15px;
`;

export const Input = styled.input`
  outline: none;
  width: ${(props) => props.width};
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-indent: 10px;
  height: 40px;
  font-family: "S-CoreDream-3Light";

  &:focus {
    outline: none;
    border: 1px solid ${Theme.color.blue};
  }
`;
