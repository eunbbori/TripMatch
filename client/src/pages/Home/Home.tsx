import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { Title, ModalCard } from "./HomeStyle";

const Home = () => {
  const reviewModal = (nickname: string) => {
    return (
      <ModalCard>
        <div className="modalCard">
          <div className="userInfo">
            <img src="https://picsum.photos/600/900" />
            <div className="nickname">닉네임여덟글자다</div>
            <div className="detailInfo">20대 여성</div>
          </div>
          <div className="question">동행과의 여행은 어떠셨나요?</div>
          <div className="guide">평가는 익명으로 수집됩니다.</div>
          <div className="btn">
            <button>확인</button>
            <button>취소</button>
          </div>
        </div>
      </ModalCard>
    );
  };
  return (
    <div>
      <div>
        <Carousel />
        <Title>
          <h3>동행게시판</h3>
          <Link to="/">더보기</Link>
        </Title>
        <MakeMatchPostList />
        <FreePostPreview />
        <FestivalList />
      </div>
      {/* <ModalCard>
        <div className="modalCard">
          <div className="userInfo">
            <img src="https://picsum.photos/600/900" />
            <div className="nickname">닉네임여덟글자다</div>
            <div className="detailInfo">20대 여성</div>
          </div>
          <div className="question">동행과의 여행은 어떠셨나요?</div>
          <div className="guide">평가는 익명으로 수집됩니다.</div>
          <div className="btn">
            <button>확인</button>
            <button>취소</button>
          </div>
        </div>
      </ModalCard> */}
    </div>
  );
};

export default Home;
