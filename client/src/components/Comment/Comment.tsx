import React, { useState } from "react";
import { showModal } from "../../slice/modal";
import { useAppDispatch } from "../../store/hooks";
import { Button } from "../CommentList/CommentListStyle";
import UserProfile from "../UserProfile/UserProfile";
import type { CommentType } from "./../../type/comment";
import {
  ButtonContainer,
  Container,
  Content,
  Date,
  ProfileContainer,
  UpdateInput,
} from "./CommentStyle";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [isClickUpdate, setIsClickUpdate] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onClickUpdate = () => setIsClickUpdate(true);

  const onClickCancle = () => setIsClickUpdate(false);

  const onClickDelete = () => dispatch(showModal("댓글"));

  return (
    <Container key={comment.commentId}>
      <ProfileContainer>
        <UserProfile user={comment.author} />
        <Date>({comment.createdAt})</Date>
      </ProfileContainer>
      {isClickUpdate ? (
        <UpdateInput defaultValue={comment.content} />
      ) : (
        <Content>{comment.content}</Content>
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
  );
};

export default Comment;
