import React from "react";
import styled from "styled-components";
import PostDetail from "./../../components/PostDetail/PostDetail";
import dummy from "../dummy.png";
import Comment from "../../components/Comment/Comment";

const MatchPostDetail = () => {
  const matchData = {
    status: "모집중",
    hopeGender: "성별 무관",
    hopeAge: "20대",
    region: "경상도",
    duration: ["2022-12-14", "2022-12-15"],
    userCount: 4,
    thumbnailImg: dummy,
  };

  const userData = {
    nickname: "nickname",
    profileImg: "",
  };

  return (
    <Container>
      <PostDetail matchData={matchData} user={userData} />
      <Comment />
    </Container>
  );
};

export default MatchPostDetail;

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 11vh;
`;
