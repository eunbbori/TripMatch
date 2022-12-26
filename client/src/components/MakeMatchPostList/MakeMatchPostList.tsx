import React, { useEffect, useState } from "react";
import { Container, MatchPosList } from "./MakeMatchPostListStyle";
import { Link } from "react-router-dom";
import { FilterType } from "../../type/filter";
import axios from "axios";
import { MatchPostType } from "../../type/matchPost";
import { matchMockData } from "../../pages/Home/components/mockData";

interface DataProps {
  filter?: FilterType;
  data: MatchPostType[];
  likes?: MatchPostType[];
}

interface LikePostType {
  [key: string]: boolean; //postID에 대해 true, false로 좋아요 글 구분
}

// const mockLikes = ["3", "4", "10", "11"];

// const mockData = [
//   {
//     postID: "1",
//     nickname: "가나다라",
//     region: "서울",
//     title: "충청도 같이 여행가실 분 구합니다~!~!",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "2",
//     nickname: "가나다라",
//     region: "충청도",
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "3",
//     nickname: "가나다라",
//     region: "전라도",
//     status: true,
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "4",
//     nickname: "가나다라",
//     region: "경기도",
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "5",
//     nickname: "가나다라",
//     region: "제주도",
//     status: true,
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "6",
//     nickname: "가나다라",
//     region: "기타",
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "7",
//     nickname: "가나다라",
//     status: true,
//     region: "서울",
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
//   {
//     postID: "8",
//     status: true,
//     nickname: "가나다라",
//     region: "서울",
//     title: "제목입니다",
//     like: true,
//     thumbnailImg: "https://picsum.photos/600/900",
//   },
// ];

const MakeMatchPostList: React.FC<DataProps> = ({ data, filter = {} }) => {
  //비회원의 경우 좋아요 없으므로 빈 배열을 디폴트로 설정
  const [matchPost, setMatchPost] = useState<MatchPostType[]>([]);
  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  useEffect(() => {
    setMatchPost(data);
  }, [data]);

  const toggleLikes = async (idx: number) => {
    const newData = data;
    newData[idx].like = !data[idx];
    setMatchPost(newData);
    await axios.post("http://localhost:5000/api/main/likes/like", {
      postId: data[idx].postId,
    });
  };

  // mockdata를 쓰지 않으면 지워도 되는 함수
  const checkFilter = (item: any) => {
    const { region, status } = filter;

    if (region === "전체" && status === "전체") {
      return true;
    } else if (region === "전체" && status !== "전체") {
      return item.status;
    } else if (region !== "전체" && status === "전체") {
      return region === item.region;
    } else {
      return region === item.region && item.status;
    }
  };

  return (
    <Container>
      <MatchPosList>
        {data &&
          data
            .filter(
              (item) => Object.keys(filter).length === 0 || checkFilter(item),
            )
            .map((item, idx) => {
              return (
                <div className="item" key={item.postId}>
                  {item.like ? (
                    <img
                      src={item.like ? fullHeart : emptyHeart}
                      className="heart"
                      onClick={() => {
                        toggleLikes(idx);
                      }}
                    />
                  ) : (
                    <img src={emptyHeart} className="heart" />
                  )}
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

export default MakeMatchPostList;
