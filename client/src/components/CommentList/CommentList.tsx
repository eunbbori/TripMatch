import React, { useState } from "react";
import styled from "styled-components";
import CommentForm from "../CommentForm/CommentForm";
import type { CommentType } from "../../type/comment";
import UserProfile from "../UserProfile/UserProfile";
import { useAppDispatch } from "./../../store/hooks";
import { showModal } from "../../slice/deleteModal";

const Comment: React.FC<{ comments: CommentType[] }> = ({ comments }) => {
  const [isClickUpdate, setIsClickUpdate] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onClickUpdate = () => {
    setIsClickUpdate(true);
  };

  const onClickCancle = () => {
    setIsClickUpdate(false);
  };

  const onClickDelete = () => dispatch(showModal("댓글"));

  return (
    <>
      <CommentCount>
        <span>{comments.length}</span>개의 답변
      </CommentCount>
      {comments.map((comment) => (
        <Container key={comment.id}>
          <ProfileContainer>
            <UserProfile user={comment.user} />
            <Date>({comment.createdAt})</Date>
          </ProfileContainer>
          {isClickUpdate ? (
            <UpdateInput defaultValue={comment.comment} />
          ) : (
            <Content>{comment.comment}</Content>
          )}
          <ButtonContainer>
            {isClickUpdate ? (
              <>
                <Button>수정 완료</Button>
                <Button onClick={onClickCancle}>취소</Button>
              </>
            ) : (
              <>
                <Button onClick={onClickUpdate}>수정</Button>
                <Button onClick={onClickDelete}>삭제</Button>
              </>
            )}
          </ButtonContainer>
        </Container>
      ))}
      <CommentForm />
    </>
  );
};

export default Comment;

const CommentCount = styled.p`
  margin: 20px 0 10px;
  font-size: 14px;

  span {
    color: ${(props) => props.theme.color.pink};
    font-weight: bold;
  }
`;

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
