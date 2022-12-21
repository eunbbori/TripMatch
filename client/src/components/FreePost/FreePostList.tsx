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
} from "./FreePostListStyle";
import CommentLogo from "../../images/comment-dots.png";

interface FreePostProps {
  region: string;
}

const FreePostList: React.FC<FreePostProps> = ({ region }) => {
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
      category: "숙소",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "3",
      nickname: "가나다라",
      category: "숙소",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "4",
      nickname: "가나다라",
      category: "숙소",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "5",
      nickname: "가나다라",
      category: "숙소",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
    {
      postID: "6",
      nickname: "가나다라",
      category: "숙소",
      region: "충청도",
      title: "제목입니다",
      createdAt: "22.12.12",
      commentCount: 3,
    },
  ];

  return (
    <Container>
      {mockData.map((data, i) => {
        return (
          <div className="container" key={i}>
            <MainContent>
              <PostInfo>
                <Region>[{data.region}]</Region>
                <Category>[{data.category}]</Category>
                <Title>{data.title}</Title>
              </PostInfo>
              <UserInfo>
                <Nickname>{data.nickname}</Nickname>
                <SeparateLine>|</SeparateLine>
                <CreatedDate>{data.createdAt}</CreatedDate>
              </UserInfo>
            </MainContent>
            <CommentInfo>
              <CommentImage src={CommentLogo} alt="" />
              <CommentCount>{data.commentCount}</CommentCount>
            </CommentInfo>
          </div>
        );
      })}
    </Container>
  );
};

export default FreePostList;
