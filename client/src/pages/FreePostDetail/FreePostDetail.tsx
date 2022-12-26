import React from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Comment from "../../components/CommentList/CommentList";
import pointer from "../../images/temporaryIconPointer.png";
import {
  useGetAllFreePostQuery,
  useGetFreePostQuery,
} from "../../slice/freePostApi";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import { FreePostType } from "./../../type/freePost";

const FreePostDetail = () => {
  const { id } = useParams();
  const postquery = useGetFreePostQuery(id);
  const { data: post, isLoading, isError } = postquery;

  // useGetAllFreePostQuery 예시
  // const { data, isLoading, isError } = useGetAllFreePostQuery({ page: 0, region: "서울" });

  // 목데이터
  // const post: FreePostType = {
  //   communityId: "1",
  //   title: "경상도 맛집 추천해주세요",
  //   region: "경상도",
  //   category: "맛집",
  //   author: {
  //     email: "1",
  //     nickname: "nick",
  //     profileImg: "",
  //   },
  //   content: "<p>1번 글입니다</p><p>맛집</p><p>추천해주세요</p>",
  //   comments: [
  //     {
  //       commentId: "2",
  //       author: {
  //         email: "1",
  //         nickname: "nick",
  //         profileImg: "",
  //       },
  //       content: "반가워요?",
  //       createdAt: "2022-12-11 16:10:02",
  //     },
  //     {
  //       commentId: "3",
  //       author: {
  //         email: "1",
  //         nickname: "nick",
  //         profileImg: "",
  //       },
  //       content: "안녕하세요?",
  //       createdAt: "2022-12-11 16:10:02",
  //     },
  //     {
  //       commentId: "4",
  //       author: {
  //         email: "1",
  //         nickname: "nick",
  //         profileImg: "",
  //       },
  //       content: "밀면?",
  //       createdAt: "2022-12-11 16:10:02",
  //     },
  //     {
  //       commentId: "5",
  //       author: {
  //         email: "1",
  //         nickname: "nick",
  //         profileImg: "",
  //       },
  //       content: "돼지국밥?",
  //       createdAt: "2022-12-11 16:10:02",
  //     },
  //   ],
  //   createdAt: "2022-12-11 16:10:02",
  // };

  if (!post) {
    return <NotFound />;
  }

  return (
    <Container>
      <>
        <div>
          <CategoryName>
            <Pointer src={pointer} />
            {post.region} &gt; {post.category}
          </CategoryName>
        </div>
        <PostDetail user={post.author} freePost={post} />
        {post.comments && <Comment comments={post.comments} />}
      </>
    </Container>
  );
};

export default FreePostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 15vh;
`;

const CategoryName = styled.span`
  font-size: 12px;
  color: #747474;
  display: flex;
  align-items: center;
`;

const Pointer = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;
