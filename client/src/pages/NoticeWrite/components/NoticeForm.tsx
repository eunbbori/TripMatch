import React, { LegacyRef, RefObject, useRef } from "react";
import Editor from "../../../components/Editor/Editor";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  TitleContainer,
  TitleInputBox,
} from "./NoticeFormStyle";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import { NoticeType } from "../../../type/notice";
import {
  useCreateNoticeMutation,
  useUpdateNoticeMutation,
} from "../../../slice/noticeApi";

const FreePostForm = () => {
  const state: NoticeType = useLocation().state;
  const navigate = useNavigate();
  const [createNotice] = useCreateNoticeMutation();

  const [updateNotice] = useUpdateNoticeMutation();

  const titleRef: RefObject<HTMLInputElement> = useRef(null);
  const contentRef: LegacyRef<ToastEditor> = useRef(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !titleRef.current?.value ||
      contentRef.current?.getInstance().getHTML() === "<p><br></p>"
    ) {
      alert("모든 내용을 채워주세요.");
      return;
    }

    if (state && titleRef.current && contentRef.current) {
      const newObj: NoticeType = {
        noticeId: state.noticeId,
        title: titleRef.current.value,
        content: contentRef.current.getInstance().getHTML(),
      };
      updateNotice(newObj);
      navigate(`/notice/${state.noticeId}`);
    } else if (!state && titleRef.current && contentRef.current) {
      const newObj: NoticeType = {
        title: titleRef.current.value,
        content: contentRef.current.getInstance().getHTML(),
      };
      createNotice(newObj);
      navigate("/notice");
    }
  };

  const onClickCancle = () => {
    state ? navigate(`/notice/${state.noticeId}`) : navigate("/notice");
  };

  return (
    <form onSubmit={onSubmit}>
      <TitleContainer>
        <TitleInputBox>
          <input
            type="text"
            placeholder="ex) 12월 31일 부산 해돋이 보러갈 동행 2명 구합니다"
            defaultValue={state && state.title}
            ref={titleRef}
          />
        </TitleInputBox>
      </TitleContainer>
      <Editor initialValue={state && state.content} contentRef={contentRef} />
      <ButtonContainer>
        <Button type="button" onClick={onClickCancle}>
          취소
        </Button>
        <Button>{state ? "수정 완료" : "작성 완료"}</Button>
      </ButtonContainer>
    </form>
  );
};

export default FreePostForm;
