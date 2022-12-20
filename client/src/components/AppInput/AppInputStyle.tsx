import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Div = styled.div`
  margin: 10px 0;
  display: flex;
`;

export const Input = styled.input`
  outline: none;
  width: ${(props) => props.width};
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-indent: 10px;
  height: 40px;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
  }
`;

export const RadioAndCheckBoxInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #333;
  outline: none;
  text-indent: 10px;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.color.blue};
  }
`;

export const RadioAndCheckBoxDiv = styled.div`
  display: inline-flex;
  height: 40px;
`;

export const RadioAndCheckBoxLabel = styled.label`
  align-self: center;
  margin-right: 15px;
`;

export const Label = styled.label`
  flex: none;
  align-self: center;
  margin-right: 15px;
`;
