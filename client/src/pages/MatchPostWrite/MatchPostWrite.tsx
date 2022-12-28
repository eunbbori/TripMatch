import { useState, useRef, ChangeEvent, LegacyRef } from "react";
import Editor from "../../components/Editor/Editor";
import { useUpdateImgMutation } from "../../slice/uploadImgApi";
import AppSelect from "../../components/AppSelect/AppSelect";
import {
  Container,
  ButtonContainer,
  MatchPostAppButton,
  DateRange,
  RadioAndCheckBoxLabel,
  RadioAndCheckBoxDiv,
} from "./MatchPostWriteStyle";
import AppInputText from "../../components/AppInputText/AppInputText";
import AppInputRadioCheck from "../../components/AppInputRadioCheck/AppInputRadioCheck";
import AppInputFile from "../../components/AppInputFile/AppInputFile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import { MatchPostType } from "../../type/matchPost";
import {
  useUpdateMatchPostMutation,
  useCreateMatchPostMutation,
} from "../../slice/matchPostApi";
import { dateFormat } from "../../util/dateFormatting";

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
  { value: "남성", htmlValue: "남성" },
  { value: "여성", htmlValue: "여성" },
  { value: "성별무관", htmlValue: "성별무관" },
];

const ageList = [
  { value: "20대", htmlValue: "20대" },
  { value: "30대", htmlValue: "30대" },
  { value: "40대", htmlValue: "40대" },
  { value: "50대", htmlValue: "50대" },
  { value: "연령대무관", htmlValue: "연령대무관" },
];

const MatchPostWrite = () => {
  const navigate = useNavigate();
  const state: MatchPostType = useLocation().state;
  const [createMatchPost] = useCreateMatchPostMutation();
  const [updateMatchPost] = useUpdateMatchPostMutation();

  const today = dateFormat("today");
  const regionRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const peopleCntRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const contentRef: LegacyRef<ToastEditor> = useRef(null);

  const [genders, setGender] = useState<string>(state ? state.hopeGender : "");
  const [ages, setAges] = useState<string[]>(state ? state.hopeAge : []);
  const [startDate, setStartDate] = useState<string>(
    state ? state.duration[0] : today,
  );
  const [endDate, setEndDate] = useState<string>(
    state ? state.duration[1] : today,
  );
  const [updateImg] = useUpdateImgMutation();

  const handleStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value > endDate) {
      alert("종료 날짜보다 작게 설정 바랍니다.");
      setStartDate(endDate);
      event.target.value = endDate;
      return;
    }
    setStartDate(event.target.value);
  };

  const handleEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value < startDate) {
      alert("시작 날짜보다 크게 설정 바랍니다.");
      setEndDate(startDate);
      event.target.value = endDate;
      return;
    }
    setEndDate(event.target.value);
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
    let fileUrl = "";
    if (fileRef.current?.files && fileRef.current.files.length !== 0) {
      const imgData = new FormData();
      imgData.append(
        "file",
        fileRef.current?.files[fileRef.current.files.length - 1],
      );
      fileUrl = await updateImg(imgData)
        .unwrap()
        .then((result) => {
          return result.url;
        })
        .catch(() => {
          return "error";
        });
    }
    if (fileUrl === "error") {
      alert("이미지 업로드에 실패하였습니다.");
      return;
    }

    if (fileUrl === "" && state) {
      fileUrl = state.thumbnail;
    }
    const region = regionRef.current!.value;
    const title = titleRef.current!.value;
    const peopleCnt = Number(peopleCntRef.current!.value);
    const contact = contactRef.current!.value;
    const startDate = startDateRef.current!.value;
    const endDate = endDateRef.current!.value;
    const content = contentRef.current?.getInstance().getHTML() || "";

    if (ages.length === 0 || genders.length === 0) {
      alert("입력 값을 확인해주세요.");
      return;
    }
    const matchPost: MatchPostType = {
      ...(state && { postId: state.postId }),
      title: title,
      region: region,
      userCount: peopleCnt,
      duration: [startDate, endDate],
      hopeGender: genders,
      hopeAge: ages,
      thumbnail: fileUrl,
      contact: contact,
      content: content,
    };

    if (state) {
      updateMatchPost(matchPost)
        .then(() => {
          navigate(`/match/${matchPost.postId}`);
        })
        .catch(() => {
          alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
        });
    } else {
      createMatchPost(matchPost)
        .then(() => {
          navigate("/match");
        })
        .catch(() => {
          alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
        });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <AppSelect
          refer={regionRef}
          defaultValue={state && state.region}
          className={"region"}
          options={regions}
          label={"지 역"}
        />
        <AppInputText
          refer={titleRef}
          required={true}
          defaultValue={state && state.title}
          inputWidth="100%"
          type={"text"}
          label={"제 목"}
          className={"title large"}
          placeholder={"전주 여행 같이 가실 분"}
        />
        <AppInputText
          refer={peopleCntRef}
          required={true}
          defaultValue={state && state.userCount.toString()}
          inputWidth="5%"
          type={"number"}
          label={"모집 인원"}
          className={"peopleCount"}
        />
        <DateRange>
          <AppInputText
            type={"date"}
            required={true}
            defaultValue={startDate}
            refer={startDateRef}
            label={"여행 기간"}
            className={"startDatePicker"}
            onChange={handleStartDate}
          />
          <p>~</p>
          <AppInputText
            type={"date"}
            required={true}
            defaultValue={endDate}
            refer={endDateRef}
            className={"endDatePicker"}
            onChange={handleEndDate}
          />
        </DateRange>
        <RadioAndCheckBoxDiv>
          <RadioAndCheckBoxLabel>희망 성별</RadioAndCheckBoxLabel>
          {genderList.map((gender) => {
            return (
              <AppInputRadioCheck
                key={gender.value}
                type="radio"
                value={gender.value}
                checked={genders.includes(gender.value)}
                onClick={(e) => setGender(e.target.value)}
                htmlValue={gender.htmlValue}
                className="gender"
              />
            );
          })}
        </RadioAndCheckBoxDiv>
        <RadioAndCheckBoxDiv>
          <RadioAndCheckBoxLabel>희망 연령대</RadioAndCheckBoxLabel>
          {ageList.map((age) => {
            return (
              <AppInputRadioCheck
                key={age.value}
                type="checkbox"
                value={age.value}
                checked={Boolean(
                  ages.find((stateAge) => {
                    return age.value === stateAge;
                  }),
                )}
                htmlValue={age.htmlValue}
                onClick={handleAges}
                className="age"
              />
            );
          })}
        </RadioAndCheckBoxDiv>
        <AppInputFile
          refer={fileRef}
          defaultValue={state && state.thumbnail}
          type={"file"}
          label={"사진 첨부"}
          className={"file"}
        />
        <AppInputText
          refer={contactRef}
          required={true}
          defaultValue={state && state.contact}
          inputWidth="20%"
          type={"text"}
          label={"연락 수단"}
          className={"contact"}
          placeholder={"인스타그램, 전화번호 등"}
        />
        <Editor contentRef={contentRef} initialValue={state && state.content} />
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
