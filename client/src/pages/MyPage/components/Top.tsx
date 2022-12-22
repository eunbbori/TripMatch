import React, { useEffect, useState } from "react";
import { PostUserInfo } from "../../../type/userPost";
import { Top, TripCount, Score } from "./TopStyle";
import axios from "axios";

const MyPageTop: React.FC = () => {
  const [data, setData] = useState<PostUserInfo>();

  // const baseUrl = "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io/userInfo";

  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get("http://localhost:4000/postUserInfo");
      setData(fetchData.data[0]);
    };
    postData();
  }, []);

  return (
    <Top key={data?.userId}>
      <h1>{data?.nickname}님, 안녕하세요 !</h1>
      <TripCount>
        <span>동행 횟수</span>
        <span>{data?.tripCount}</span>
      </TripCount>
      <Score>
        <span>나의 점수</span>
        <span>
          <span id="scoreNum">{data?.score}</span>/5
        </span>
      </Score>
    </Top>
  );
};

export default MyPageTop;
