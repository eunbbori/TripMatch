import React, { useEffect, useState } from "react";
import { Container, FreePostList } from "./FreePostPreviewStyle";
import { Link } from "react-router-dom";
import axios from "axios";

const mockData = [
  {
    postID: "1",
    nickname: "닉네임",
    region: "강원도",
    category: "숙박",
    title: "충청도 어디어디에 구경할만한 곳 있나요?",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
  {
    postID: "2",
    nickname: "닉네임",
    region: "충청도",
    category: "맛집",
    title: "충청도 어디어디에 구경할만한 곳 있나요?",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
  {
    postID: "3",
    nickname: "닉네임",
    region: "강원도",
    category: "숙박",
    title: "충청도 어디어디에 구경할만한 곳 있나요?",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
  {
    postID: "4",
    nickname: "닉네임",
    region: "강원도",
    category: "숙박",
    title: "충청도 어디어디에 구경할만한 곳 있나요?",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
  {
    postID: "5",
    nickname: "닉네임",
    region: "경기도",
    category: "관광",
    title: "임진각 추천 볼거리 리스트 top100 주저리주저리",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
  {
    postID: "6",
    nickname: "닉네임",
    region: "강원도",
    category: "숙박",
    title: "충청도 어디어디에 구경할만한 곳 있나요?",
    createdAt: "2022-11-04T04:57:01.267Z",
    commentCount: 1,
  },
];

const joinDateFormat = (createdAt: string) => {
  return (
    createdAt.slice(0, 4) +
    "." +
    createdAt.slice(5, 7) +
    "." +
    createdAt.slice(8, 10)
  );
};

const FreePostPreview = () => {
  const [freePost, setFreePost] = useState([]);

  const getFreePost = async () => {
    const data = await axios.get("/").then((res) => res.data);
    setFreePost(data);
    return;
  };

  useEffect(() => {
    // getFreePost()
  });

  return (
    <Container>
      <div className="title">
        <h2>자유게시판</h2>
        <Link to="/free">더보기</Link>
      </div>
      <FreePostList>
        {mockData.map((item) => {
          return (
            <Link to="/" key={item.postID}>
              <div className="item">
                <span className="region">[{item.region}]</span>
                <span className="category">[{item.category}]</span>
                <span className="itemTitle">{item.title}</span>
                <span className="createDate">
                  {joinDateFormat(item.createdAt)}
                </span>
              </div>
            </Link>
          );
        })}
      </FreePostList>
    </Container>
  );
};

export default FreePostPreview;
