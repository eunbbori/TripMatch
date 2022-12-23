import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #00000010;
  border-bottom: 1px solid #00000010;
  padding: 10px 0;

  + div {
    border-top: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.span`
  display: inline-block;
  font-size: ${(props) => props.theme.font.S};
  color: #747474;
  margin-left: 10px;
`;

export const Content = styled.p`
  padding: 14px 5px 10px;
  font-size: ${(props) => props.theme.font.M};
`;

export const UpdateInput = styled.textarea`
  width: calc(100% - 30px);
  margin: 14px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  padding: 10px 15px;

  &:focus {
    outline-color: ${(props) => props.theme.color.blue};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
