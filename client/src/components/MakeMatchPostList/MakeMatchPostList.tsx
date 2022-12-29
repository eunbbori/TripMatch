import React, { useEffect, useState } from "react";
import { Container, MatchPosList } from "./MakeMatchPostListStyle";
import { MatchPostType } from "../../type/matchPost";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { showModal } from "../../slice/modal";
import Modal from "../Modal/Modal";
import {
  useAddLikeMutation,
  useDeleteLikeMutation,
} from "../../slice/matchPostApi";

interface DataProps {
  data: MatchPostType[];
  location?: string;
}

const MakeMatchPostList: React.FC<DataProps> = ({ data, location }) => {
  //비회원의 경우 좋아요 없으므로 빈 배열을 디폴트로 설정
  const [matchPosts, setMatchPosts] = useState<MatchPostType[]>([]);
  const fullHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/fullheart_adk06q.png";
  const emptyHeart =
    "https://res.cloudinary.com/dk9scwone/image/upload/v1671341657/emptyheart_ra2kqf.png";

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setMatchPosts(data);
  }, [data]);

  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const [onDeleteLike] = useDeleteLikeMutation();
  const [onAddLike] = useAddLikeMutation();

  const toggleLikes = async (item: MatchPostType) => {
    if (!sessionStorage.getItem("email")) {
      dispatch(
        showModal({
          title: "로그인",
          content: "로그인 하시겠습니까?",
          rightButton: "예",
          leftButton: "아니요",
        }),
      );
      return;
    } else {
      if (item.like) {
        onDeleteLike(item.postId || "");
      } else {
        onAddLike(item.postId || "");
      }
    }
  };

  return (
    <Container>
      <MatchPosList>
        {matchPosts.map((item) => {
          const url = `/match/${item.postId}`;
          return (
            <div className="item" key={item.postId}>
              <img
                src={item.like ? fullHeart : emptyHeart}
                className="heart"
                onClick={() => {
                  toggleLikes(item);
                }}
              />
              <Link to={url}>
                <span className="region">{item.region}</span>
                <img src={item.thumbnail} className="itemImg" />
                <div className="itemTitle">
                  {item.title.length > 35
                    ? item.title.slice(0, 35) + "..."
                    : item.title}
                </div>
              </Link>
            </div>
          );
        })}
      </MatchPosList>
      {isShown && (
        <Modal
          callBackFn={() => {
            navigate("/auth/login");
          }}
        />
      )}
    </Container>
  );
};

export default MakeMatchPostList;
