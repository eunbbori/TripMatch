import React from "react";
import { SideBar, Box, SideBarNav } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  return (
    <SideBar>
      <Box>
        <SideBarNav to="/mypage/userInfo">정보 수정</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/myPage/myContents">게시글 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/myComment">댓글 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/receivedEnroll">신청받은 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/myEnroll">신청한 내역</SideBarNav>
      </Box>
    </SideBar>
  );
};

export default SideBarComponent;
