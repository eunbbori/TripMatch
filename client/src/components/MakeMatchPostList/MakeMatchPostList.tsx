import React, { useEffect, useState } from "react";
import { Container, MatchPosList } from "./MakeMatchPostListStyle";
import { MatchPostType } from "../../type/matchPost";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { showModal } from "../../slice/modal";
import Modal from "../Modal/Modal";
import authAxios from "./../../axios/authAxios";
import { match } from "assert";

interface DataProps {
  data: MatchPostType[];
  likes?: MatchPostType[];
}

const MakeMatchPostList: React.FC<DataProps> = ({ data }) => {
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

  const toggleLikes = async (
    idx: number,
    element: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const target = element.currentTarget;
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
      const item = matchPosts[idx];
      if (item.like) {
        authAxios
          .delete(
            `http://34.64.156.80:3003/api/main/likes/like?postId=${item.postId}`,
          )
          .then(() => {
            target.setAttribute("src", emptyHeart);
            setMatchPosts(
              matchPosts.map((matchPost) => {
                if (item.postId === matchPost.postId) {
                  const copyPost = { ...matchPost };
                  copyPost.like = false;
                  return copyPost;
                }
                return matchPost;
              }),
            );
          });
      } else {
        authAxios
          .post("http://34.64.156.80:3003/api/main/likes/like", {
            postId: item.postId,
          })
          .then(() => {
            target.setAttribute("src", fullHeart);
            setMatchPosts(
              matchPosts.map((matchPost) => {
                if (item.postId === matchPost.postId) {
                  const copyPost = { ...matchPost };
                  copyPost.like = true;
                  return copyPost;
                }
                return matchPost;
              }),
            );
          });
      }
    }
  };

  return (
    <Container>
      <MatchPosList>
        {matchPosts.map((item, idx) => {
          const url = `/match/${item.postId}`;
          return (
            <div className="item" key={item.postId}>
              <img
                src={item.like ? fullHeart : emptyHeart}
                className="heart"
                onClick={(element) => {
                  toggleLikes(idx, element);
                }}
              />
              <Link to={url}>
                <span className="region">{item.region}</span>
                <img src={item.thumbnail} className="itemImg" />
                <div className="itemTitle">{item.title}</div>
              </Link>
            </div>
          );
        })}
      </MatchPosList>
      {isShown && (
        <Modal
          callBackFn={() => {
            navigate("/login");
          }}
        />
      )}
    </Container>
  );
};

export default MakeMatchPostList;
