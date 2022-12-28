import { Link } from "react-router-dom";
import AppButton from "../../components/AppButton/AppButton";
import AppTabContent from "../../components/AppTabContent/AppTabContent";
import FreePostPanel from "../../components/AppTapPanel/FreePostPanel";
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

  return (
    <Container>
      <AppTabContent tabContents={tabContents} />
      <ButtonContainer>
        <Link to="/free/write">
          <AppButton
            width={"120px"}
            className={"postBtn"}
            text={"글쓰기"}
            type={"button"}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default FreePostList;
