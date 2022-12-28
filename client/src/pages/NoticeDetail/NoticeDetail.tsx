import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PostTitle,
  UserContainer,
  Date,
  ButtonContainer,
  Button,
  Container,
} from "./NoticeDetailStyle";
import type { FreePostType, AuthorType } from "./../../type/freePost";
import type { MatchPostType } from "../../type/matchPost";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { showModal } from "../../slice/modal";
import { dateFormat } from "../../util/dateFormatting";
import {
  useDeleteNoticeMutation,
  useGetNoticeQuery,
} from "../../slice/noticeApi";
import Modal from "../../components/Modal/Modal";
import MarkdownView from "../../components/MarkdownView/MarkdownView";

interface PostDetailProps {
  matchPost?: MatchPostType;
  freePost?: FreePostType;
  user?: AuthorType;
  isApplying?: boolean;
  setMatchId?: React.Dispatch<React.SetStateAction<string>>;
  setOpenThumbnail?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeDetail: React.FC<PostDetailProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: notice } = useGetNoticeQuery(id);
  const [onDeleteNotice, { isSuccess: isSuccessDeleteNotice }] =
    useDeleteNoticeMutation();

  const dispatch = useAppDispatch();

  const [isAdmin, setIsAdmin] = useState(false);
  const { show: isShown } = useAppSelector((state) => state.modal);

  // 로그인한 유저가 운영자나 글 작성자인지 체크함
  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("roleToken") === "admin");
  }, []);

  useEffect(() => {
    if (isSuccessDeleteNotice) {
      navigate("/notice");
    }
  }, [isSuccessDeleteNotice, navigate]);

  const onClickDelete = () => {
    dispatch(
      showModal({
        title: "삭제",
        content: "이 게시글을 삭제하시겠습니까?",
        rightButton: "삭제",
      }),
    );
  };

  const onClickModalDelete = () => {
    onDeleteNotice(id);
  };

  return (
    <Container>
      <PostTitle>
        <div>{notice?.title}</div>
      </PostTitle>
      <UserContainer>
        <Date>{notice?.createdAt && dateFormat(notice.createdAt)}</Date>
      </UserContainer>
      <MarkdownView content={notice?.content} />
      <ButtonContainer>
        <Link to="/notice">
          <Button>목록</Button>
        </Link>

        {isAdmin && (
          <>
            <Link to={`/notice/write/${id}`} state={notice}>
              <Button>수정</Button>
            </Link>
            <Button onClick={onClickDelete}>삭제</Button>
          </>
        )}
      </ButtonContainer>
      {isShown && <Modal callBackFn={onClickModalDelete} />}
    </Container>
  );
};

export default NoticeDetail;
