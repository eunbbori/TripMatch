import React, { LegacyRef, RefObject, useRef, useState } from "react";
import Editor from "../../../components/Editor/Editor";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Select,
  TitleContainer,
  TitleInputBox,
} from "./FreePostFormStyle";
import type { FreePostType } from "../../../type/freePost";
import AppSelect from "../../../components/AppSelect/AppSelect";
import {
  useCreateFreePostMutation,
  useUpdateFreePostMutation,
} from "../../../slice/freePostApi";
import { Editor as ToastEditor } from "@toast-ui/react-editor";

const FreePostForm = () => {
  const state: FreePostType = useLocation().state;
  const navigate = useNavigate();
  const [
    createFreePost,
    { isLoading: isLoadingCreate, isError: isErrorCreate },
  ] = useCreateFreePostMutation();

  const [
    updateFreePost,
    { isLoading: isLoadingUpdate, isError: isErrorUpdate },
  ] = useUpdateFreePostMutation();

  const [contentInput, setContentInput] = useState("");

  const regionRef: RefObject<HTMLSelectElement> = useRef(null);
  const categoryRef: RefObject<HTMLSelectElement> = useRef(null);
  const titleRef: RefObject<HTMLInputElement> = useRef(null);
  const contentRef: LegacyRef<ToastEditor> = useRef(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      state &&
      regionRef.current &&
      categoryRef.current &&
      titleRef.current &&
      contentRef.current
    ) {
      const newObj: FreePostType = {
        communityId: state.communityId,
        title: titleRef.current.value,
        region: regionRef.current.value,
        category: categoryRef.current.value,
        content: contentRef.current.getInstance().getHTML(),
      };
      updateFreePost(newObj);
      navigate(`/free/${state.communityId}`);
    } else if (
      !state &&
      regionRef.current &&
      categoryRef.current &&
      titleRef.current &&
      contentRef.current
    ) {
      const newObj: FreePostType = {
        title: titleRef.current.value,
        region: regionRef.current.value,
        category: categoryRef.current.value,
        content: contentRef.current.getInstance().getHTML(),
      };
      createFreePost(newObj);
      navigate("/free");
    }
  };

  const onClickCancle = () => {
    state ? navigate(`/free/${state.communityId}`) : navigate("/free");
  };

  return (
    <form onSubmit={onSubmit}>
      <TitleContainer>
        <AppSelect
          options={[
            "서울",
            "경기도",
            "강원도",
            "충청도",
            "경상도",
            "전라도",
            "제주도",
            "기타",
          ]}
          className="region"
          defaultValue={state && state.region}
          refer={regionRef}
        />
        <AppSelect
          options={["맛집", "액티비티", "교통", "숙소", "기타"]}
          className="category"
          defaultValue={state && state.category}
          refer={categoryRef}
        />
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
