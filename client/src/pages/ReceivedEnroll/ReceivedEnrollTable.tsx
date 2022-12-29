import React, { useState, useEffect } from "react";
import { Content, StyledLink, Layer } from "./ReceivedEnrollTableStyle";
import axios from "axios";
import authAxios from "../../axios/authAxios";
import { Link } from "react-router-dom";

export interface EnrolledPersonType {
  matchId: string;
  postId: string;
  title: string;
  matchStatus: string;
  status: boolean;
  duration: string[];
  applicant: Applicant;
}

export interface Applicant {
  email: string;
  nickname: string;
  profileImg: string;
}

const ReceivedEnrollTable: React.FC = () => {
  const [data, setData] = useState<EnrolledPersonType[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(
          "/api/main/mypage/receivedEnroll",
        );
        if (fetchData.status === 200) {
          setData(fetchData.data);
        }
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

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>내가 쓴 글</th>
              <th>신청자</th>
              <th>모집상태</th>
              <th>수락 / 거절</th>
            </tr>
          </thead>
          {/* 수락하면 status true, 거절하면 status false */}
          <tbody>
            {data ? (
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
                };

                return (
                  <tr key={item.matchId}>
                    {}
                    {!item.title ? (
                      <td id="title">삭제된 게시물 입니다.</td>
                    ) : (
                      <td id="title">
                        <StyledLink to={`/match/${item.postId}`}>
                          {item.title}
                        </StyledLink>
                      </td>
                    )}

                    <td>{item.applicant.nickname}</td>
                    <td>{item.status ? "모집중" : "모집마감"}</td>

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
              })
            ) : (
              <tr>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default ReceivedEnrollTable;
