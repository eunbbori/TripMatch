import React, { useEffect, useState } from "react";
import { Container, MatchPosList } from "./MakeMatchPostListStyle";
import { Link } from "react-router-dom";
import axios from "axios";

interface DataProps {
  data?: object[];
  likes?: string[]; //로그인 유저의 좋아요 누른 게시글의 포스트 id가 배열로 온다고 가정하고 작성함
}

interface LikePostType {
  [key: string]: boolean; //postID에 대해 true, false로 좋아요 글 구분
}

const mockLikes = ["3", "4", "10", "11"];

const mockData = [
  {
    postID: "1",
    nickname: "가나다라",
    region: "충청도",
    title: "충청도 같이 여행가실 분 구합니다~!~!",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "2",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "3",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "4",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "5",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "6",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "7",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
  {
    postID: "8",
    nickname: "가나다라",
    region: "충청도",
    title: "제목입니다",
    like: true,
    thumbnailImg: "https://picsum.photos/600/900",
  },
];

const MakeMatchPostList: React.FC<DataProps> = ({ data, likes = [] }) => {
  //비회원의 경우 좋아요 없으므로 빈 배열을 디폴트로 설정
  const [likePost, setLikePost] = useState<LikePostType>({});
  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  useEffect(() => {
    const newLikePost: LikePostType = {};
    mockData.forEach((item) => {
      newLikePost[item.postID] = mockLikes.indexOf(item.postID) !== -1;
    });
    setLikePost(newLikePost);
  }, []);

  const toggleLikes = async (postID: string) => {
    setLikePost({ ...likePost, [postID]: !likePost[postID] });
    // await axios.post('') 좋아요 게시글 api 작성
  };

  return (
    <Container>
      <MatchPosList>
        {mockData &&
          mockData.map((item) => {
            return (
              <div className="item" key={item.postID}>
                <img
                  src={likePost[item.postID] ? fullHeart : emptyHeart}
                  className="heart"
                  onClick={() => toggleLikes(item.postID)}
                />
                <Link to="/">
                  <span className="region">{item.region}</span>
                  <img src={item.thumbnailImg} className="itemImg" />
                  <div className="itemTitle">{item.title}</div>
                </Link>
              </div>
            );
          })}
      </MatchPosList>
    </Container>
  );
};

export default MakeMatchPostList;
