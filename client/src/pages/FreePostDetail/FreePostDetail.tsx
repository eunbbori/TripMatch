import React, { useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail/PostDetail";
import styled from "styled-components";
import Comment from "../../components/Comment/Comment";
import pointer from "../../images/temporaryIconPointer.png";
import axios from "axios";

// export interface Freepost {
//   id: number;
//   author: Author;
//   region: string;
//   category: string;
//   title: string;
//   content: string;
//   comments: CommentType[];
//   createdAt: Date;
// }

// export interface Author {
//   id: number;
//   nickname: string;
//   profileImg: string;
// }

// export interface CommentType {
//   id: number;
//   user: Author;
//   comment: string;
//   createdAt: Date;
// }

const data = {
  id: 1,
  author: {
    id: 1,
    nickname: "nick",
    profileImg: "",
  },
  region: "경상도",
  category: "맛집",
  title: "공주 한정식 82식당 후기입니다",
  content: "<p>맛집</p><p>추천합니다</p>",
  comments: [
    {
      id: 2,
      user: {
        id: 1,
        nickname: "nick",
        profileImg: "",
      },
      comment: "반가워요?",
      createdAt: "2022-12-11 16:10:02",
    },
    {
      id: 3,
      user: {
        id: 1,
        nickname: "nick",
        profileImg: "",
      },
      comment: "반가워요?",
      createdAt: "2022-12-11 16:10:02",
    },
    {
      id: 4,
      user: {
        id: 1,
        nickname: "nick",
        profileImg: "",
      },
      comment: "반가워요?",
      createdAt: "2022-12-11 16:10:02",
    },
    {
      id: 5,
      user: {
        id: 1,
        nickname: "nick",
        profileImg: "",
      },
      comment: "반가워요?",
      createdAt: "2022-12-11 16:10:02",
    },
  ],
  createdAt: "2022-12-11 16:10:02",
};

const FreePostDetail = () => {
  const [post, setPost] = useState(data);

  // useEffect(() => {
  //   const getPost = async () => {
  //     const res = await axios.get("http://localhost:3001/freeposts");
  //     setPost(res.data[0]);
  //   };
  //   getPost();
  // }, []);

  return (
    <Container>
      <div>
        <CategoryName>
          <Pointer src={pointer} />
          {post?.region} &gt; {post?.category}
        </CategoryName>
      </div>
      <PostDetail user={post?.author} freePost={post} />
      <Comment comments={post?.comments} />
    </Container>
  );
};

export default FreePostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 10vh;
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
