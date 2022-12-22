import React, { useEffect, useState } from "react";
import { Content, Layer, ReviewDiv } from "./MyEnrollTableStyle";
import axios from "axios";

export interface Post {
  postId: number;
  title: string;
  duration: Duration[];
  postStatus: boolean;
  author: Author[];
  agreeStatus: string;
  reviewStatus: boolean;
}

export interface Author {
  authorId: number;
  nickname: string;
  gender: string;
  age: number;
  contactInfo: string;
  score: number;
}

export interface Duration {
  start: Date;
  end: Date;
}

const MyEnrollTable: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await axios.get("http://localhost:4000/myEnroll");
      setData(fetchData.data[0].posts);
    };
    getData();
  }, []);

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>신청한 글</th>
              <th>글쓴이</th>
              <th>신청 상태</th>
              <th>취소 / 리뷰</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              const today = Date.now();
              const tripEnd = item.duration[0].end;
              const dateTripEnd = new Date(tripEnd);
              const tripEndTime = dateTripEnd.getTime();
              const elapse = Number(
                ((today - tripEndTime) / 1000 / 60 / 60 / 24).toFixed(0),
              );

              // 1. 수락해서 여행 종료되고 시간이 지나 리뷰 버튼이 없는경우
              // 2. 신청 상태가 거절일 때 버튼 아예 없애기
              // 3. 여행 종료 후 일주일 이내일 때 리뷰 버튼 보여주기
              // 4. 대기 상태일 때 취소 버튼 보여주기

              return (
                <tr key={item.author[0].authorId}>
                  <td id="title">{item.title}</td>
                  <td>{item.author[0].nickname}</td>
                  {}
                  <td>{item.agreeStatus}</td>
                  <td id="last">
                    {elapse >= 1 &&
                    elapse <= 7 &&
                    item.agreeStatus === "수락" ? (
                      <ReviewDiv>
                        <button id="review">리뷰</button>
                        <span>여행 종료로부터 + {elapse}</span>
                      </ReviewDiv>
                    ) : elapse < 1 ? (
                      <button id="cancel">취소</button> // 수정 필요함 !
                    ) : elapse > 14 && item.agreeStatus === "대기" ? (
                      <button id="cancel">취소</button>
                    ) : (
                      <span></span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default MyEnrollTable;
