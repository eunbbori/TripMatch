import React from "react";
import Top from "../MyPage/components/Top";
import SideBar from "../MyPage/components/SideBar";
import MyCommentTable from "../MyPage/components/MyCommentTable";
import { Body, Container, MidContainer } from "../MyPage/MyPageContentsStyle";

const MyComment: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <MyCommentTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyComment;
