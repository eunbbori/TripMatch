import React, { useRef } from "react";
import Editor from "../Editor/Editor";
import {
  Button,
  ButtonContainer,
  Select,
  TitleContainer,
  TitleInput,
} from "./style";

interface FreePostFormProps {
  post?: any;
}

const FreePostForm: React.FC<FreePostFormProps> = ({ post }) => {
  const regionRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  //const contentRef = useRef(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(regionRef.current?.value);
    console.log(categoryRef.current?.value);
    console.log(titleRef.current?.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <TitleContainer>
        <Select defaultValue={post ? post.region : "서울"} ref={regionRef}>
          <option value="서울">서울</option>
          <option value="경기도">경기도</option>
          <option value="강원도">강원도</option>
          <option value="충청도">충청도</option>
          <option value="경상도">경상도</option>
          <option value="전라도">전라도</option>
          <option value="제주도">제주도</option>
          <option value="기타">기타</option>
        </Select>
        <Select defaultValue={post ? post.category : "맛집"} ref={categoryRef}>
          <option value="맛집">맛집</option>
          <option value="액티비티">액티비티</option>
          <option value="교통">교통</option>
          <option value="숙소">숙소</option>
          <option value="기타">기타</option>
        </Select>
        <TitleInput
          type="text"
          placeholder="ex) 12월 31일 부산 해돋이 보러갈 동행 2명 구합니다"
          defaultValue={post && post.title}
          ref={titleRef}
        />
      </TitleContainer>
      <Editor />
      <ButtonContainer>
        <Button type="button">취소</Button>
        <Button>작성 완료</Button>
      </ButtonContainer>
    </form>
  );
};

export default FreePostForm;
