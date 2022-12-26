import { useState, useRef, ChangeEvent, LegacyRef } from "react";
import Editor from "../../components/Editor/Editor";
import { useUpdateImgMutation } from "../../slice/uploadImgApi";
import AppSelect from "../../components/AppSelect/AppSelect";
import axios from "axios";

const domain = "http://localhost:5000";

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
  ButtonContainer,
  MatchPostAppButton,
  DateRange,
} from "./MatchPostWriteStyle";
import AppInputText from "../../components/AppInputText/AppInputText";
import AppInputRadioCheck from "../../components/AppInputRadioCheck/AppInputRadioCheck";
import AppInputFile from "../../components/AppInputFile/AppInputFile";
import { Link, useNavigate } from "react-router-dom";
import { Editor as ToastEditor } from "@toast-ui/react-editor";

const MatchPostWrite = () => {
  const navigate = useNavigate();

  const regionRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const peopleCntRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const contentRef: LegacyRef<ToastEditor> = useRef(null);

  const [gender, setGender] = useState<string>("남성");
  const [ages, setAges] = useState<any[]>([]);
  const [imageUploaded, setImageUploaded] = useState<File>();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [updateImg, { error, isLoading }] = useUpdateImgMutation();

  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    setImageUploaded(file);
  };

  const handleAges = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...ages];
    if (event.target.checked) {
      updatedList = [...ages, event.target.value];
    } else {
      updatedList.splice(ages.indexOf(event.target.value), 1);
    }
    setAges(updatedList);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const imgData = new FormData(); //formdata 객체 생성
    imgData.append("file", imageUploaded || ""); //객체에 파일값 넣음
    imgData.append("upload_preset", "tripMatch"); //클라우디너리 설정값이므로 반드시 넣어주세요.
    imgData.append("cloud_name", "dk9scwone"); //클라우디너리 설정값이므로 반드시 넣어주세요.

    const image = await updateImg(imgData).unwrap();
    if (!image) {
      alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
    }
    const region = regionRef.current!.value;
    const title = titleRef.current!.value;
    const peopleCnt = peopleCntRef.current!.value;
    const contact = contactRef.current!.value;
    const content = contentRef.current?.getInstance().getHTML();
    axios
      .post(`${domain}/api/main/posts/post`, {
        region: region,
        title: title,
        userCount: peopleCnt,
        duration: [startDate, endDate],
        hopeGender: gender,
        hopeAge: ages[0], // age는 여러개가 되어야함. api에서 수정한 후 수정할 예정
        thumbnail: Object.values(image)[15],
        contact: contact,
        content: content,
      })
      .then(() => {
        navigate("/match");
      })
      .catch(() => {
        alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <AppSelect
          refer={regionRef}
          className={"region"}
          options={regions}
          label={"지 역"}
        />
        <AppInputText
          refer={titleRef}
          inputWidth="100%"
          type={"text"}
          label={"제 목"}
          className={"title large"}
          placeholder={"전주 여행 같이 가실 분"}
        />
        <AppInputText
          refer={peopleCntRef}
          inputWidth="5%"
          type={"number"}
          label={"모집 인원"}
          className={"peopleCount"}
        />
        <DateRange>
          <AppInputText
            type={"date"}
            label={"여행 기간"}
            className={"startDatePicker"}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p>~</p>
          <AppInputText
            type={"date"}
            className={"endDatePicker"}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </DateRange>
        <AppInputRadioCheck
          radioAndCheckBoxList={genderList}
          type={"radio"}
          label={"희망 성별"}
          className={"gender"}
          onChange={(e) => setGender(e.target.value)}
        />
        <AppInputRadioCheck
          radioAndCheckBoxList={ageList}
          onChange={(e) => handleAges(e)}
          type={"checkbox"}
          label={"희망 연령대"}
          className={"age"}
        />
        <AppInputFile
          type={"file"}
          defaultValue={imageUploaded?.name}
          onChange={(e) => imageHandler(e)}
          label={"사진 첨부"}
          className={"file"}
        />
        <AppInputText
          refer={contactRef}
          inputWidth="20%"
          type={"text"}
          label={"연락 수단"}
          className={"contact"}
          placeholder={"인스타그램, 전화번호 등"}
        />
        <Editor contentRef={contentRef} />
        <ButtonContainer>
          <Link to="/match">
            <MatchPostAppButton
              width={"120px"}
              className={"cancelBtn"}
              type={"submit"}
              text={"취소"}
            />
          </Link>
          <MatchPostAppButton
            width={"120px"}
            className={"finishBtn"}
            type={"submit"}
            text={"작성 완료"}
          />
        </ButtonContainer>
      </Container>
    </form>
  );
};

export default MatchPostWrite;
