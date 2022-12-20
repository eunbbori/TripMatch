import React, { useEffect, useState } from "react";
import { UserInfo } from "./MyPageTable";
import { Top, TripCount, Score } from "./TopStyle";
import axios from "axios";

const MyPageTop: React.FC = () => {
  const [data, setData] = useState<UserInfo>();

  const baseUrl = "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io";

  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get(baseUrl + "/userInfo");
      setData(fetchData.data);
    };
    postData();
  }, []);

  console.log(data, "H"); // userInfo를 새로 만들어야함...... 진짜 열받는다

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
