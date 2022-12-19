import React, { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import styled from "styled-components";
import type { Comment } from "../../pages/MatchPostDetail/MatchPostDetail";

interface CommentContentProps {
  data: Comment;
}

const CommentContent: React.FC<CommentContentProps> = ({ data }) => {
  const [isClickUpdate, setIsClickUpdate] = useState<boolean>(false);

  const onClickUpdateButton = () => {
    setIsClickUpdate(true);
  };

  const onClickCancleButton = () => {
    setIsClickUpdate(false);
  };

  return (
    <Container>
      <ProfileContainer>
        <UserProfile user={data.user} />
        <Date>({data.createdAt})</Date>
      </ProfileContainer>
      {isClickUpdate ? (
        <UpdateInput defaultValue={data.comment} />
      ) : (
        <Content>{data.comment}</Content>
      )}
      <ButtonContainer>
        {isClickUpdate ? (
          <>
            <Button>수정 완료</Button>
            <Button onClick={onClickCancleButton}>취소</Button>
          </>
        ) : (
          <>
            <Button onClick={onClickUpdateButton}>수정</Button>
            <Button>삭제</Button>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default CommentContent;

const Container = styled.div`
  border-top: 1px solid #00000010;
  border-bottom: 1px solid #00000010;
  padding: 10px 0;

  + div {
    border-top: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.span`
  display: inline-block;
  font-size: 13px;
  color: #747474;
  margin-left: 10px;
`;

const Content = styled.p`
  padding: 14px 5px 10px;
  font-size: 14px;
`;

const UpdateInput = styled.textarea`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;

  + button {
    margin-left: 15px;
  }
`;
