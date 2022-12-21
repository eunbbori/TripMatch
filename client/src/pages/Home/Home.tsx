import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import FestivalList from "./components/FestivalList";
import FreePostPreview from "./components/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { Title, ModalCard } from "./HomeStyle";

const Home = () => {
  const ReviewModal = () => {
    const listArray = [0, 1, 2, 3, 4];
    const [starList, setStarList] = useState([
      false,
      false,
      false,
      false,
      false,
    ]);
    const [point, setPoint] = useState(0);
    const fullStar =
      "https://res.cloudinary.com/dk9scwone/image/upload/v1671520384/fullstar_ypgg1e.png";
    const emptyStar =
      "https://res.cloudinary.com/dk9scwone/image/upload/v1671520384/emptystar_pvmnrk.png";

    const checkStar = (idx: number) => {
      const newStarList = new Array(5).fill(false);
      for (let i = 0; i <= idx; i++) {
        newStarList[i] = true;
      }
      setStarList(newStarList);
      return;
    };

    const postPoint = async () => {
      await axios.post("");
    };

    return (
      <ModalCard>
        <div className="modalCard">
          <div className="userInfo">
            <img src="https://picsum.photos/600/900" />
            <div className="nickname">닉네임여덟글자다</div>
            <div className="detailInfo">20대 여성</div>
          </div>
          <div className="question">동행과의 여행은 어떠셨나요?</div>
          <ul className="star">
            {listArray.map((item) => {
              return (
                <li
                  key={item}
                  onMouseEnter={() => {
                    checkStar(item);
                    setPoint(item + 1);
                  }}
                >
                  <img src={starList[item] ? fullStar : emptyStar} />
                </li>
              );
            })}
          </ul>
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
        {/* <ReviewModal /> */}
      </div>
    </div>
  );
};

export default Home;
