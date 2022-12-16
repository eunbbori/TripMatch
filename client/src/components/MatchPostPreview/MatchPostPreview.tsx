import React from "react";
import { Container, MatchPost } from "./MatchPostPreviewStyle";
import { Link } from "react-router-dom";

const MatchPostPreview = () => {
  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-heart-shape-39559_aatqxl.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-love-7476962_fk1mpw.png";

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

  return (
    <Container>
      <div className="title">
        <h2>동행게시판</h2>
        <Link to="/">더보기</Link>
      </div>
      <MatchPost>
        {mockData.map((item, idx) => {
          return (
            <Link to="/" className="item" key={idx}>
              {/*key는 postID로 변경필요*/}
              <span className="region">{item.region}</span>
              <img src={fullHeart} className="heart" />
              <img src={item.thumbnailImg} className="itemImg" />
              <div className="itemTitle">{item.title}</div>
            </Link>
          );
        })}
      </MatchPost>
    </Container>
  );
};

export default MatchPostPreview;
