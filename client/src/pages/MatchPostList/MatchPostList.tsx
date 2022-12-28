import { useNavigate } from "react-router-dom";
import AppButton from "../../components/AppButton/AppButton";
import AppTabContent from "../../components/AppTabContent/AppTabContent";
import MatchPostPanel from "../../components/AppTapPanel/MatchPostPanel";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container, ButtonContainer } from "./MatchPostListStyle";

const MatchPostList = () => {
  const regions = [
    { tab: "전체", content: <MatchPostPanel region="전체" /> },
    { tab: "서울", content: <MatchPostPanel region="서울" /> },
    { tab: "경기도", content: <MatchPostPanel region="경기도" /> },
    { tab: "강원도", content: <MatchPostPanel region="강원도" /> },
    { tab: "충청도", content: <MatchPostPanel region="충청도" /> },
    { tab: "경상도", content: <MatchPostPanel region="경상도" /> },
    { tab: "전라도", content: <MatchPostPanel region="전라도" /> },
    { tab: "제주도", content: <MatchPostPanel region="제주도" /> },
    { tab: "기타", content: <MatchPostPanel region="기타" /> },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const postLinkHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (sessionStorage.getItem("email")) {
      navigate("/match/write");
    } else {
      dispatch(
        showModal({
          title: "로그인",
          content: "로그인 하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
    }
  };
  return (
    <Container>
      <AppTabContent tabContents={regions} />
      <ButtonContainer>
        <AppButton
          onClick={postLinkHandler}
          width={"120px"}
          className={"postBtn"}
          text={"글쓰기"}
          type={"button"}
        />
      </ButtonContainer>
      {isShown && (
        <Modal
          callBackFn={() => {
            navigate("/auth/login");
          }}
        />
      )}
    </Container>
  );
};

export default MatchPostList;
