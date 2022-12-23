import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .container {
    width: 1000px;
    height: 50px;
    margin: auto;
    padding: 10px;
    display: flex;
    border: 1px solid black;
    justify-content: space-between;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`;

export const PostInfo = styled.div`
  display: flex;
  font-size: 1rem;
`;

export const Region = styled.div`
  margin-right: 0.5rem;
  font-size: 1rem;
`;

export const Category = styled.div`
  margin-right: 0.5rem;
  font-size: 1rem;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const UserInfo = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 15px;
`;

export const Nickname = styled.div`
  margin-right: 0.5rem;
`;

export const SeparateLine = styled.div`
  margin-right: 0.5rem;
`;

export const CreatedDate = styled.div`
  font-weight: bold;
`;

export const CommentInfo = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  margin-right: 15px;
`;

export const CommentImage = styled.img`
  margin-right: 5px;
`;

export const CommentCount = styled.div`
  margin-right: 5px;
`;

export const FreePostLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
