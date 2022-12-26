import React, { useEffect, useState } from "react";
import { Content, Layer, ReviewDiv } from "./MyEnrollTableStyle";
// import ReviewModal from "../Home/reviewModal";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ReviewModal from "../Home/reviewModal";

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
  profileImg?: string;
  email: string;
  nickname: string;
  gender: string;
  age: number;
  contactInfo?: string;
  score?: number;
}

export interface Duration {
  start: Date;
  end: Date;
}

const MyEnrollTable: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isCancel, setCancel] = useState(false);
  const [isReview, setReview] = useState(false);
  const dispatch = useAppDispatch();
  const { show: isShown, modalText } = useAppSelector((state) => state.modal);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await axios.get("http://localhost:4000/myEnroll");
      setData(fetchData.data[0].posts);
    };
    getData();
  }, []);

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCancel(!isCancel);
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
  };

  const handleCancel = () => {
    if (modalText?.title === "동행 신청 취소") {
      return onCancel;
    }
  };

  const onReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReview(!isReview);
  };

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
              <tbody key={item.postId}>
                <tr>
                  <td id="title">{item.title}</td>
                  <td>{item.author[0].nickname}</td>
                  <td>{item.agreeStatus}</td>
                  <td id="last">
                    {elapse >= 1 &&
                    elapse <= 7 &&
                    item.agreeStatus === "수락" ? (
                      <ReviewDiv>
                        <button id="review" onClick={onReview}>
                          리뷰
                        </button>
                        {isReview && (
                          <ReviewModal
                            email={item.author[0].email}
                            setReview={setReview}
                          />
                        )}
                        <span>여행 종료로부터 + {elapse}</span>
                      </ReviewDiv>
                    ) : elapse < 1 && item.agreeStatus === "수락" ? (
                      <span></span> // 여행 시작도 안했고 수락 됐을때
                    ) : elapse < 1 && item.agreeStatus === "대기중" ? (
                      <div>
                        <button id="cancel" onClick={onCancel}>
                          취소
                        </button>
                        {isShown && <Modal callBackFn={handleCancel} />}
                      </div>
                    ) : (
                      // 여행 시작 안했고 대기중일 때
                      <span></span> // 여행 끝난지 한참됨
                    )}
                  </td>
                </tr>

                {item.agreeStatus === "수락" ? (
                  <tr id="agreeContact">
                    <td id="contact">
                      <span>
                        동행자와 연락해보세요 :)
                        <span id="contactInfo">
                          {item.author[0].contactInfo}
                        </span>
                      </span>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            );
          })}
        </table>
      </Layer>
    </Content>
  );
};

export default MyEnrollTable;
