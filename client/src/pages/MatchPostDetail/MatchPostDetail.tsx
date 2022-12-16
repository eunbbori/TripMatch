import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import Comment from "../../components/Comment/Comment";
import axios from "axios";

// const matchData = {
//   status: true,
//   hopeGender: "성별 무관",
//   hopeAge: "20대",
//   region: "경상도",
//   duration: ["2022-12-14", "2022-12-15"],
//   userCount: 4,
//   thumbnailImg: "",
// };

// const userData = {
//   nickname: "nickname",
//   profileImg: "",
// };

export interface MatchPost {
  id: number;
  author: Author;
  region: string;
  userCount: number;
  hopeGender: string;
  hopeAge: string;
  title: string;
  content: string;
  status: boolean;
  duration: Date[];
  thumbnailImg: string;
  comments: Comment[];
  createdAt: Date;
}

export interface Author {
  id: number;
  nickname: string;
  profileImg: string;
}

export interface Comment {
  id: number;
  user: Author;
  comment: string;
  createdAt: Date;
}

const MatchPostDetail = () => {
  const [post, setPost] = useState<MatchPost>();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://70aee874-8965-4db1-be06-07823d5c4dda.mock.pstmn.io/matchposts/1",
      );
      setPost(res.data);
    };

    getData();
  }, []);

  console.log(post);

  return (
    <Container>
      <PostDetail matchPost={post} user={post?.author} />
      <Comment comments={post?.comments} />
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 11vh;
`;
