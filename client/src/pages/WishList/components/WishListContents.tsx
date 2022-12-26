import React, { useEffect, useState } from "react";
import {
  Container,
  MatchPosList,
} from "../../../components/MakeMatchPostList/MakeMatchPostListStyle";
import { Link } from "react-router-dom";
import { FilterType } from "../../../type/filter";
import authAxios from "../../../axios/authAxios";

interface LikeType {
  postId: string;
  title: string;
  region: string;
  thumbnail: string;
}

interface DatasProp {
  data?: LikeType[];
  likes?: string[]; //로그인 유저의 좋아요 누른 게시글의 포스트 id가 배열로 온다고 가정하고 작성함
}

interface LikePostType {
  [key: string]: boolean; //postID에 대해 true, false로 좋아요 글 구분
}

const WishListContents: React.FC<DatasProp> = ({ data, likes = [] }) => {
  //비회원의 경우 좋아요 없으므로 빈 배열을 디폴트로 설정
  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";

  useEffect(() => {
    const likeDatas = async () => {
      const fetchData = await authAxios.get("/api/main/likes");
      return fetchData.data;
    };
    likeDatas();
  }, []);
  console.log(data);

  return (
    <Container>
      <MatchPosList>
        {data &&
          data.map((item) => {
            return (
              <div className="item" key={item.postId}>
                <img src={fullHeart} className="heart" />
                <Link to="/">
                  <span className="region">{item.region}</span>
                  <img src={item.thumbnail} className="itemImg" />
                  <div className="itemTitle">{item.title}</div>
                </Link>
              </div>
            );
          })}
      </MatchPosList>
    </Container>
  );
};

export default WishListContents;
