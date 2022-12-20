import React from "react";
import { Top, TripCount, Score } from "./TopStyle";

interface UserInfo {
  name: any;
  tripCount: any;
  score: any;
}

const MyPageTop: React.FC<UserInfo> = ({ name, tripCount, score }) => {
  return (
    <Top>
      <h1>{name}님, 안녕하세요 !</h1>
      <TripCount>
        <span>동행 횟수</span>
        <span>{tripCount}</span>
      </TripCount>
      <Score>
        <span>나의 점수</span>
        <span>
          <span id="scoreNum">{score}</span>/5
        </span>
      </Score>
    </Top>
  );
};

export default MyPageTop;
