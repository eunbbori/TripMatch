import React, { useState } from "react";
import Editor from "../../components/Editor/Editor";
import AppSelect from "../../components/AppSelect/AppSelect";
import AppInput from "../../components/AppInput/AppInput";

const regions = [
  "서울",
  "경기도",
  "강원도",
  "충청도",
  "경상도",
  "전라도",
  "제주도",
  "기타",
];

const genderList = [
  { value: "man", htmlValue: "남성" },
  { value: "woman", htmlValue: "여성" },
  { value: "both", htmlValue: "성별무관" },
];

const ageList = [
  { value: "20", htmlValue: "20대" },
  { value: "30", htmlValue: "30대" },
  { value: "40", htmlValue: "40대" },
  { value: "50", htmlValue: "50대" },
  { value: "none", htmlValue: "연령대무관" },
];

import { Container, Etc, ButtonContainer, Button } from "./MatchPostWriteStyle";

const MatchPostWrite = () => {
  // const [selectedGender, setSelectedGender] = useState<string>();

  // const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedGender(event.target.value);
  // };

  return (
    <Container>
      <AppSelect className={"region"} options={regions} label={"지 역"} />
      <AppInput
        inputWidth="100%"
        type={"text"}
        label={"제 목"}
        className={"title large"}
        placeholder={"전주 여행 같이 가실 분"}
      />
      <AppInput
        inputWidth="5%"
        type={"number"}
        label={"모집 인원"}
        className={"peopleCount"}
      />
      <AppInput
        inputWidth="20%"
        type={"dateRange"}
        label={"여행 기간"}
        className={"datePicker"}
      />
      <AppInput
        radioAndCheckBoxList={genderList}
        type={"radio"}
        label={"희망 성별"}
        className={"gender"}
      />
      <AppInput
        radioAndCheckBoxList={ageList}
        type={"checkbox"}
        label={"희망 연령대"}
        className={"age"}
      />
      <Etc>
        <AppInput type={"file"} label={"사진 첨부"} className={"file"} />
      </Etc>
      <AppInput
        inputWidth="20%"
        type={"text"}
        label={"연락 수단"}
        className={"contact"}
        placeholder={"인스타그램, 전화번호 등"}
      />
      <Editor
        setContent={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ButtonContainer>
        <Button>취소</Button>
        <Button>작성 완료</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MatchPostWrite;
