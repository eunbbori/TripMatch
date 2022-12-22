import AppButton from "../../components/AppButton/AppButton";
import AppTabContent from "../../components/AppTabContent/AppTabContent";
import MatchPostPanel from "../../components/AppTapPanel/MatchPostPanel";
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

  return (
    <Container>
      <AppTabContent tabContents={regions} />
      <ButtonContainer>
        <AppButton
          width={"120px"}
          className={"postBtn"}
          text={"글쓰기"}
          type={"button"}
        />
      </ButtonContainer>
    </Container>
  );
};

export default MatchPostList;
