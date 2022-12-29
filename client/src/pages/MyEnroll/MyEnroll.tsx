import React from "react";
import Top from "../MyPage/components/Top";
import SideBar from "../MyPage/components/SideBar";
import { Body, Container, MidContainer } from "../MyPage/MyPageContentsStyle";
import MyEnrollTable from "./MyEnrollTable";

const MyEnroll: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <MyEnrollTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyEnroll;
