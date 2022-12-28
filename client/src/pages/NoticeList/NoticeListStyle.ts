import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 20px 0 15vh;
  width: 1000px;
  margin: auto;
`;

export const ListTitle = styled.h2`
  font-size: ${(props) => props.theme.font.L};
  margin-bottom: 20px;
`;

export const ListContainer = styled.div`
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
`;

export const Index = styled.span`
  display: inline-block;
  margin: 0 15px;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const UserInfo = styled.div`
  display: flex;
  font-size: 15px;
`;

export const CreatedDate = styled.div`
  font-weight: bold;
`;

export const FreePostLink = styled(Link)`
  width: 1000px;
  height: 50px;
  margin: auto;
  padding: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.color.lightblue};
  background: linear-gradient(
    100deg,
    ${(props) => props.theme.color.lightpink},
    ${(props) => props.theme.color.lightblue}
  );
  text-decoration: none;
  color: #000;
`;
