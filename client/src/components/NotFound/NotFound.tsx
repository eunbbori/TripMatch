import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ErrorMessage {
  message?: string;
}

const NotFound: React.FC<ErrorMessage> = ({ message }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {message ? (
        <Message>{message}</Message>
      ) : (
        <Message>해당 게시글이 존재하지 않습니다.</Message>
      )}
      <Button onClick={() => navigate(-1)}>되돌아가기</Button>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  font-size: ${(props) => props.theme.font.L};
  font-weight: bold;
`;

const Message = styled.p`
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${(props) => props.theme.font.M};
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;
`;
