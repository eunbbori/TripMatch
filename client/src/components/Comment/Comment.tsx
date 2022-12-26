import React, { useEffect, useState } from "react";
import { useUpdateCommentMutation } from "../../slice/commentApi";
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
  const [commentInput, setCommentInput] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  const [onUpdateComment, { isError, isSuccess }] = useUpdateCommentMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      alert("댓글 수정에 실패했습니다.");
      setIsClickUpdate(false);
    }
    if (isSuccess) {
      setIsClickUpdate(true);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    setIsAuthor(sessionStorage.getItem("email") === comment.author.email);
  }, [comment.author.email]);

  const onClickUpdate = () => setIsClickUpdate(true);

  const onClickCancle = () => setIsClickUpdate(false);

  const onClickDelete = () => dispatch(showModal("댓글"));

  const onClickUpdateCompleted = () => {
    onUpdateComment({
      commentId: comment.commentId,
      content: commentInput,
    });
  };

  return (
    <Container key={comment.commentId}>
      <ProfileContainer>
        <UserProfile user={comment.author} />
        <Date>({comment.createdAt})</Date>
      </ProfileContainer>
      {isClickUpdate ? (
        <UpdateInput
          defaultValue={comment.content}
          onChange={(e) => setCommentInput(e.target.value)}
        />
      ) : (
        <Content>{comment.content}</Content>
      )}
      {isAuthor && (
        <ButtonContainer>
          {isClickUpdate ? (
            <>
              <Button onClick={onClickUpdateCompleted}>수정 완료</Button>
              <Button onClick={onClickCancle}>취소</Button>
            </>
          ) : (
            <>
              <Button onClick={onClickUpdate}>수정</Button>
              <Button onClick={onClickDelete}>삭제</Button>
            </>
          )}
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Comment;
