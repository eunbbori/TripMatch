import React from "react";
import Top from "../MyPage/components/Top";
import SideBar from "../MyPage/components/SideBar";
import { Body, Container, MidContainer } from "../MyPage/MyPageContentsStyle";
import ReceivedEnrollTable from "./ReceivedEnrollTable";

const ReceivedEnroll: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <ReceivedEnrollTable />
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default ReceivedEnroll;
