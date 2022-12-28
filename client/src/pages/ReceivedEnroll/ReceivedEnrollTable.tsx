import React, { useState, useEffect } from "react";
import { Content, Layer } from "./ReceivedEnrollTableStyle";
import axios from "axios";
import authAxios from "../../axios/authAxios";
import { Link } from "react-router-dom";

export interface EnrolledPersonType {
  matchId: string;
  postId: string;
  title: string;
  matchStatus: string;
  duration: string[];
  applicant: Applicant;
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
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(
          "/api/main/mypage/receivedEnroll",
        );
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    if (status) {
      getData();
    }
  }, [status]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(
          "/api/main/mypage/receivedEnroll",
        );
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);
  console.log(data);

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
                const handleApproval = (
                  e: React.MouseEvent<HTMLButtonElement>,
                ) => {
                  e.preventDefault();

                  const approvalFn = async () => {
                    try {
                      const a = await authAxios.put(
                        `/api/main/matches/${item.matchId}`,
                        {
                          ...data,
                          matchStatus: "수락",
                        },
                      );
                      if (a.status === 200) {
                        setStatus(true);
                      }
                    } catch (err: unknown) {
                      console.error(err);
                    }
                  };
                  approvalFn();
                  // setStatus(true);
                };

                const handleDenied = (
                  e: React.MouseEvent<HTMLButtonElement>,
                ) => {
                  e.preventDefault();

                  const deniedFn = async () => {
                    try {
                      const a = await authAxios.put(
                        `/api/main/matches/${item.matchId}`,
                        {
                          ...data,
                          matchStatus: "거절",
                        },
                      );
                      if (a.status === 200) {
                        setStatus(true);
                      }
                    } catch (err: unknown) {
                      console.error(err);
                    }
                  };
                  deniedFn();
                  // setStatus(true);
                };

                return (
                  <tr key={item.matchId}>
                    <td id="title">
                      <Link to={`/match/${item.postId}`}>{item.title}</Link>
                    </td>
                    <td>{item.applicant.nickname}</td>

                    {item.matchStatus !== "대기중" ? (
                      <td id="last">
                        <button
                          value="수락"
                          className="disabled"
                          disabled
                          onClick={handleApproval}
                        >
                          수락
                        </button>
                        <button
                          value="거절"
                          className="disabled"
                          disabled
                          onClick={handleDenied}
                        >
                          거절
                        </button>
                      </td>
                    ) : (
                      <td id="last">
                        <button value="수락" onClick={handleApproval}>
                          수락
                        </button>
                        <button value="거절" onClick={handleDenied}>
                          거절
                        </button>
                      </td>
                    )}
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
