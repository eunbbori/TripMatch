import React from "react";
import Top from "./components/Top";
import SideBar from "./components/SideBar";
import {
  Body,
  Container,
  Content,
  MidContainer,
} from "./components/UpdateInfoStyle";
import UpdateUserInfoFrom from "./components/UpdateUserInfoFrom";
import { PinkBox } from "../../components/Auth/AuthStyle";

const UpdateUserInfoPage = () => {
  return (
    <>
      <Body>
        <Container>
          <Top />
          <MidContainer>
            <SideBar />
            <Content className="updateConent">
              <PinkBox className="updatePinkBox">
                <UpdateUserInfoFrom />
              </PinkBox>
            </Content>
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default UpdateUserInfoPage;
