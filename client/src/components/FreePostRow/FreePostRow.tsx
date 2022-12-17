import React from "react";
import {
  Container,
  MainContent,
  PostInfo,
  Region,
  Category,
  Title,
  UserInfo,
  Nickname,
  SeparateLine,
  CreatedDate,
  CommentInfo,
  CommentImage,
  CommentCount,
} from "./FreePostRowStyle";
import CommentLogo from "../../images/comment-dots.png";

const FreePostRow = () => {
  const mockData = [
    {
      postID: "1",
      nickname: "가나다라",
      region: "충청도",
      category: "숙소",
      title: "충남 감성숙소 추천받습니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "2",
      nickname: "가나다라",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "3",
      nickname: "가나다라",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "4",
      nickname: "가나다라",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "5",
      nickname: "가나다라",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "6",
      nickname: "가나다라",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
  ];

  return (
    <Container>
      <MainContent>
        <PostInfo>
          <Region>[부산]</Region>
          <Category>[숙소]</Category>
          <Title>부산 맛집 추천받습니다</Title>
        </PostInfo>
        <UserInfo>
          <Nickname>USER123</Nickname>
          <SeparateLine>|</SeparateLine>
          <CreatedDate>22.12.12</CreatedDate>
        </UserInfo>
      </MainContent>
      <CommentInfo>
        <CommentImage src={CommentLogo} alt="" />
        <CommentCount>3</CommentCount>
      </CommentInfo>
    </Container>
  );
};

export default FreePostRow;
