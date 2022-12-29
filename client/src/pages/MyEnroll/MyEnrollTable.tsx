import React, { useEffect, useState } from "react";
import { Content, Layer, StyledLink, ReviewDiv } from "./MyEnrollTableStyle";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ReviewModal from "../Home/reviewModal";
import authAxios from "../../axios/authAxios";
import { Link } from "react-router-dom";

export interface Enroll {
  matchId: string;
  postId: string;
  title: string;
  endDate: string;
  matchStatus: string;
  contact: string;
  author: Author;
}

export interface Author {
  profileImg: string;
  email: string;
  nickname: string;
}

const MyEnrollTable: React.FC = () => {
  const [data, setData] = useState<Enroll[]>([]);
  const [isCancel, setCancel] = useState(false);
  const [isReview, setReview] = useState(false);
  const [state, setState] = useState(false);
  const dispatch = useAppDispatch();
  const { show: isShown, modalText } = useAppSelector((state) => state.modal);

  useEffect(() => {
    const enrollData = async () => {
      try {
        const fetchData = await authAxios.get("/api/main/mypage/myEnroll");
        if (fetchData.status === 200) {
          setData(fetchData.data);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    };
    if (state) {
      enrollData();
    }
  }, [state]);

  useEffect(() => {
    const enrollData = async () => {
      try {
        const fetchData = await authAxios.get("/api/main/mypage/myEnroll");
        if (fetchData.status === 200) {
          setData(fetchData.data);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    };
    enrollData();
  }, []);
  console.log(data);

  useEffect(() => {
    if (isCancel) {
      dispatch(
        showModal({
          title: "동행 신청 취소",
          content: "동행 신청을 취소하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
    }
  }, [dispatch, isCancel]);

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

          {/* endDate 속성명 변경 */}

          {data ? (
            data.map((item) => {
              const onCancel = () => {
                setCancel(!isCancel);
              };

              const handleCancel = async () => {
                if (modalText?.title === "동행 신청 취소") {
                  try {
                    const a = await authAxios.delete(
                      `/api/main/matches/${item.matchId}`,
                    );
                    if (a.status === 200) {
                      setState(true);
                      // console.log("삭제 성공");
                    }
                  } catch (err: unknown) {
                    console.error(err);
                  }
                }
              };

              const onReview = (e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setReview(!isReview);
              };

              const today = Date.now();
              const tripEnd = item.endDate;
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
                <tbody key={item.postId}>
                  <tr>
                    {!item.title ? (
                      <td id="title">삭제된 게시물 입니다.</td>
                    ) : (
                      <td id="title">
                        <StyledLink to={`/match/${item.postId}`}>
                          {item.title}
                        </StyledLink>
                      </td>
                    )}

                    <td>{item.author.nickname}</td>
                    <td>{item.matchStatus}</td>
                    <td id="last">
                      {elapse >= 1 &&
                      elapse <= 7 &&
                      item.matchStatus === "수락" ? (
                        <ReviewDiv>
                          <button id="review" onClick={onReview}>
                            리뷰
                          </button>
                          {isReview && (
                            <ReviewModal
                              authorEmail={item.author.email}
                              matchId={item.matchId}
                              setReview={setReview}
                            />
                          )}
                          <span id="endText">여행 종료로부터 + {elapse}</span>
                        </ReviewDiv>
                      ) : elapse < 1 && item.matchStatus === "수락" ? (
                        <span></span>
                      ) : item.matchStatus === "대기중" ? (
                        <div>
                          <button id="cancel" onClick={onCancel}>
                            취소
                          </button>
                          {isShown && <Modal callBackFn={handleCancel} />}
                        </div>
                      ) : !item.title && item.matchStatus === "대기중" ? (
                        // 여행 시작 안했고 대기중일 때
                        <span></span>
                      ) : (
                        // 여행 끝난지 한참됨
                        // 여행 시작 안했고 대기중일 때
                        <span></span>
                        // 여행 끝난지 한참됨
                      )}
                    </td>
                  </tr>

                  {item.matchStatus === "수락" ? (
                    <tr id="agreeContact">
                      <td id="contact">
                        <span>
                          동행자와 연락해보세요 :)
                          <span id="contactInfo">{item.contact}</span>
                        </span>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              );
            })
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </table>
      </Layer>
    </Content>
  );
};

export default MyEnrollTable;
