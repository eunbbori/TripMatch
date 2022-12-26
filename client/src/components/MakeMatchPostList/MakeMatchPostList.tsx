import React, { useEffect, useState } from "react";
import { Container, MatchPosList } from "./MakeMatchPostListStyle";
import { MatchPostType } from "../../type/matchPost";
import { Link } from "react-router-dom";
import axios from "axios";

interface DataProps {
  data: MatchPostType[];
  likes?: MatchPostType[];
}

const MakeMatchPostList: React.FC<DataProps> = ({ data }) => {
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

  return (
    <Container>
      <MatchPosList>
        {data &&
          data.map((item, idx) => {
            const url = `/match/${item.postId}`;
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
                <Link to={url}>
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
