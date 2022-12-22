import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "./components/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { Title, ModalCard } from "./HomeStyle";

const Home = () => {
  interface EmailProps {
    email: string;
  }

  interface User {
    email: string;
    profileImg: string;
    nickname: string;
    introduce: string;
    age: string;
    gender: string;
  }

  const ReviewModal: React.FC<EmailProps> = ({ email }) => {
    const [starList, setStarList] = useState([
      false,
      false,
      false,
      false,
      false,
    ]);
    const [point, setPoint] = useState(0);
    const [userInfo, setUserInfo] = useState({
      email: "",
      profileImg: "",
      nickname: "",
      introduce: "",
      age: "",
      gender: "",
    });

    const listArray = [0, 1, 2, 3, 4];
    const fullStar =
      "https://res.cloudinary.com/dk9scwone/image/upload/v1671520384/fullstar_ypgg1e.png";
    const emptyStar =
      "https://res.cloudinary.com/dk9scwone/image/upload/v1671520384/emptystar_pvmnrk.png";

    useEffect(() => {
      getUserInfo();
    }, []);

    const getUserInfo = async () => {
      // const userInfo = await axios.get("").then((res) => res.data);

      //임시 데이터
      const userInfo = {
        email: "aaaa@naver.com",
        profileImg: "skdjflsf.png",
        nickname: "닉네임은여덟글자",
        introduce: "자기소개어쩌구저쩌구",
        age: "50대 이상",
        gender: "여",
      };

      setUserInfo(userInfo);
    };

    const checkStar = (idx: number) => {
      const newStarList = new Array(5).fill(false);
      for (let i = 0; i <= idx; i++) {
        newStarList[i] = true;
      }
      setStarList(newStarList);
      return;
    };

    const postPoint = async () => {
      // await axios.post("");
    };

    return (
      <ModalCard>
        <div className="modalCard">
          <div className="userInfo">
            <img src="https://picsum.photos/600/900" />
            <div className="nickname">{userInfo.nickname}</div>
            <div className="detailInfo">
              {userInfo.age} {userInfo.gender}성
            </div>
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
            <button onClick={postPoint}>확인</button>
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
        <FestivalList location="home" />
        {/* <ReviewModal email="naver.com" /> */}
      </div>
    </div>
  );
};

export default Home;
