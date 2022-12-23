import React, { useRef, useState } from "react";
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

const FreePostForm = () => {
  const state: FreePostType = useLocation().state;
  const navigate = useNavigate();
  const [createFreePost, { isLoading: isLoadingCreate }] =
    useCreateFreePostMutation();
  const [updateFreePost, { isLoading: isLoadingUpdate }] =
    useUpdateFreePostMutation();

  const [content, setContent] = useState("");

  const regionRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (regionRef.current && categoryRef.current && titleRef.current && state) {
      const newObj: FreePostType = {
        communityId: state.communityId,
        comments: state.comments,
        createdAt: state.createdAt,
        author: state.author,
        // 여기까지의 값은 api 완성시 삭제 예정
        title: titleRef.current.value,
        region: regionRef.current.value,
        category: categoryRef.current.value,
        content,
      };
      updateFreePost(newObj);
      navigate(`/free/${state.communityId}`);
    } else if (
      regionRef.current &&
      categoryRef.current &&
      titleRef.current &&
      !state
    ) {
      const newObj: FreePostType = {
        communityId: Date.now().toString(),
        comments: [],
        createdAt: "",
        author: { email: "111", nickname: "111", profileImg: "" },
        // 여기까지의 값은 api 완성시 삭제 예정
        title: titleRef.current.value,
        region: regionRef.current.value,
        category: categoryRef.current.value,
        content,
      };
      createFreePost(newObj);
      navigate("/free");
    }
  };

  const onClickCancle = () => {
    state ? navigate(`/free/${state.communityId}`) : navigate("/");
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
        />
        <AppSelect
          options={["맛집", "액티비티", "교통", "숙소", "기타"]}
          className="category"
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
      <Editor initialValue={state && state.content} setContent={setContent} />
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
