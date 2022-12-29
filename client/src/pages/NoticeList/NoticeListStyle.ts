import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 20px 0 15vh;
  width: 1000px;
  margin: auto;
  overflow: hidden;
`;

export const ListTitle = styled.h2`
  font-size: ${(props) => props.theme.font.L};
  margin-bottom: 20px;
`;

export const ListContainer = styled.div`
  margin-top: 15px;
  min-height: 500px;
`;

export const ButtonContainer = styled.div`
  width: 1000px;
  display: flex;
  margin-inline: auto;
  justify-content: flex-end;
`;

export const PostInfo = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: center;
`;

export const Index = styled.span`
  display: inline-block;
  margin: 0 15px;
`;

export const TitleStyle = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;

  h4 {
    width: 750px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;

export const New = styled.span`
  font-size: ${(props) => props.theme.font.S};
  color: red;
  display: inline-block;
  margin-left: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  font-size: 15px;
`;

export const CreatedDate = styled.div`
  font-weight: bold;
`;

export const NoticeLink = styled(Link)`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin: auto;
  padding: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color.lightblue};
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: ${(props) => props.theme.color.lightblue};
  }
`;
