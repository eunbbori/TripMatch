import React from "react";
import { SideBar, Box, SideBarNav } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  return (
    <SideBar>
      <Box>
        <SideBarNav to="/mypage/userinfo">정보 수정</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/myPage/mycontents">게시글 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/mycomment">댓글 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/receivedenroll">신청받은 내역</SideBarNav>
      </Box>
      <Box>
        <SideBarNav to="/mypage/myenroll">신청한 내역</SideBarNav>
      </Box>
    </SideBar>
  );
};

export default SideBarComponent;
