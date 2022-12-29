import { useNavigate } from "react-router-dom";
import AppButton from "../../components/AppButton/AppButton";
import AppTabContent from "../../components/AppTabContent/AppTabContent";
import FreePostPanel from "../../components/AppTapPanel/FreePostPanel";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container, ButtonContainer } from "./FreePostListStyle";

const FreePostList = () => {
  const tabContents = [
    { tab: "전체", content: <FreePostPanel region="전체" /> },
    { tab: "서울", content: <FreePostPanel region="서울" /> },
    { tab: "경기도", content: <FreePostPanel region="경기도" /> },
    { tab: "강원도", content: <FreePostPanel region="강원도" /> },
    { tab: "충청도", content: <FreePostPanel region="충청도" /> },
    { tab: "경상도", content: <FreePostPanel region="경상도" /> },
    { tab: "전라도", content: <FreePostPanel region="전라도" /> },
    { tab: "제주도", content: <FreePostPanel region="제주도" /> },
    { tab: "기타", content: <FreePostPanel region="기타" /> },
  ];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const postLinkHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (sessionStorage.getItem("email")) {
      navigate("/free/write");
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
      <AppTabContent tabContents={tabContents} />
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

export default FreePostList;
