import React, { useState, useEffect } from "react";
import { Content, Layer } from "./ReceivedEnrollTableStyle";
import axios from "axios";
import authAxios from "../../axios/authAxios";

export interface EnrolledPersonType {
  matchId: string;
  postId: string;
  title: string;
  status: string;
  duration: string[];
  applicant: Applicant[];
}

export interface Applicant {
  email: string;
  nickname: string;
  profileImg: string;
}

// const data11 = [
//   {
//     matchId: "1",
//     postId: "1",
//     title: "title",
//     status: "",
//     duration: ["2022-10-24", "2022-10-25"],
//     applicant: [
//       {
//         email: "111@gmail.com",
//         nickname: "aass",
//         profileImg: "",
//       },
//     ],
//   },
// ];

const ReceivedEnrollTable: React.FC = () => {
  const [data, setData] = useState<EnrolledPersonType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(
          "/api/main/mypage/receivedEnroll",
        );
        setData(fetchData.data);
        // setData(data11);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const handleApproval = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const approvalFn = async () => {
      try {
        await authAxios.put(
          `/api/main/matches/${data[0].matchId}`,
          { status: "수락" },
          // { headers: { matchId: data[0].matchId } },
        );
      } catch (err: unknown) {
        console.error(err);
      }
    };
    approvalFn();
  };

  const handleDenied = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const deniedFn = async () => {
      try {
        await authAxios.put(
          `/api/main/matches/${data[0].matchId}`,
          { status: "거절" },
          // { headers: { matchId: data[0].matchId } },
        );
      } catch (err: unknown) {
        console.error(err);
      }
    };
    deniedFn();
  };

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>내가 쓴 글</th>
              <th>신청자</th>
              <th>상태</th>
            </tr>
          </thead>
          {/* 수락하면 status true, 거절하면 status false */}
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.postId}>
                    <td id="title">{item.title}</td>
                    <td>{item.applicant[0].nickname}</td>
                    <td id="last">
                      <button value="수락" onClick={handleApproval}>
                        수락
                      </button>
                      <button value="거절" onClick={handleDenied}>
                        거절
                      </button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default ReceivedEnrollTable;
