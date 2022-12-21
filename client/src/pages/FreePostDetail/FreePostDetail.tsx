import React, { useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Comment from "../../components/CommentList/CommentList";
import pointer from "../../images/temporaryIconPointer.png";
import axios from "axios";
import type { FreePostType } from "../../type/freePost";
import { useGetAllFreePostQuery, useGetFreePostQuery } from "../../slice/api";
import { useParams } from "react-router-dom";

const FreePostDetail = () => {
  //const [post, setPost] = useState<FreePostType>();
  const { id } = useParams();
  const postquery = useGetFreePostQuery(id);
  const { data: post, isLoading } = postquery;

  // useEffect(() => {
  //   const getPost = async () => {
  //     const res = await axios.get(
  //       "https://70aee874-8965-4db1-be06-07823d5c4dda.mock.pstmn.io/posts",
  //     );
  //     setPost(res.data);
  //   };
  //   getPost();
  // }, []);

  console.log(post);

  return (
    <Container>
      <div>
        <CategoryName>
          <Pointer src={pointer} />
          {post?.region} &gt; {post?.category}
        </CategoryName>
      </div>
      <PostDetail user={post?.author} freePost={post} />
      {post?.comments && <Comment comments={post.comments} />}
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
