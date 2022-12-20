import React from "react";
import Top from "./components/Top";
import SideBar from "./components/SideBar";
import MyPageTable from "./components/MyPageTable";
import { Body, Container, MidContainer } from "./MyPageStyle";

const MyPage: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <MyPageTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyPage;
