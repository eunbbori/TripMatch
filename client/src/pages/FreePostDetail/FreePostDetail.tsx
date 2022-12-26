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
  console.log(postquery);

  const { data: post, isLoading, isError } = postquery;

  // useGetAllFreePostQuery 예시
  // const { data, isLoading, isError } = useGetAllFreePostQuery({ page: 0, region: "서울" });

  if (isError) {
    return <NotFound />;
  }

  return (
    <Container>
      <>
        <div>
          <CategoryName>
            <Pointer src={pointer} />
            {post?.community.region} &gt; {post?.community.category}
          </CategoryName>
        </div>
        <PostDetail user={post?.community.author} freePost={post?.community} />
        {post?.comments && <Comment comments={post?.comments} />}
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
