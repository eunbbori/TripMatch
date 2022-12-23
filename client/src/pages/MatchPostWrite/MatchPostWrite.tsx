import Editor from "../../components/Editor/Editor";
import AppSelect from "../../components/AppSelect/AppSelect";

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

import {
  Container,
  Etc,
  ButtonContainer,
  MatchPostAppButton,
} from "./MatchPostWriteStyle";
import AppInputText from "../../components/AppInputText/AppInputText";
import AppInputRadioCheck from "../../components/AppInputRadioCheck/AppInputRadioCheck";
import AppInputDateRange from "../../components/AppInputDateRange/AppInputDateRange";
import AppInputFile from "../../components/AppIntpuFile/AppInputFile";
import AppButton from "../../components/AppButton/AppButton";
import { Link } from "react-router-dom";

const MatchPostWrite = () => {
  // const [selectedGender, setSelectedGender] = useState<string>();

  // const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedGender(event.target.value);
  // };

  return (
    <Container>
      <AppSelect className={"region"} options={regions} label={"지 역"} />
      <AppInputText
        inputWidth="100%"
        type={"text"}
        label={"제 목"}
        className={"title large"}
        placeholder={"전주 여행 같이 가실 분"}
      />
      <AppInputText
        inputWidth="5%"
        type={"number"}
        label={"모집 인원"}
        className={"peopleCount"}
      />
      <AppInputDateRange
        inputWidth="20%"
        type={"dateRange"}
        label={"여행 기간"}
        className={"datePicker"}
      />
      <AppInputRadioCheck
        radioAndCheckBoxList={genderList}
        type={"radio"}
        label={"희망 성별"}
        className={"gender"}
      />
      <AppInputRadioCheck
        radioAndCheckBoxList={ageList}
        type={"checkbox"}
        label={"희망 연령대"}
        className={"age"}
      />
      <Etc>
        <AppInputFile type={"file"} label={"사진 첨부"} className={"file"} />
      </Etc>
      <AppInputText
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
        <Link to="/match">
          <MatchPostAppButton
            width={"120px"}
            className={"cancelBtn"}
            type={"button"}
            text={"취소"}
          />
        </Link>
        <MatchPostAppButton
          width={"120px"}
          className={"finishBtn"}
          type={"button"}
          text={"작성 완료"}
        />
      </ButtonContainer>
    </Container>
  );
};

export default MatchPostWrite;
