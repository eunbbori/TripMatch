import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Div = styled.div`
  margin: 10px 0;
  display: flex;
`;

export const Label = styled.label`
  flex: none;
  align-self: center;
  margin-right: 15px;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const FileUploadName = styled.input`
  display: inline-block;
  height: 35px;
  font-size: 18px;
  padding: 0 10px;
  vertical-align: middle;
  background-color: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border: 1px solid ${Theme.color.blue};
  }
`;
export const FileUploadLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #999;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  margin-left: 10px;
`;
