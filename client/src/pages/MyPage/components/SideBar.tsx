import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBar, Box, SideBarNav } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickMypage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/myPage/myContents");
  };

  const handleClickMyComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/myPage/myComment");
  };

  const handleClickReceivedEnroll = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    navigate("/myPage/receivedEnroll");
  };

  return (
    <SideBar>
      <Box>
        <SideBarNav to="/mypage/userInfo">정보 수정</SideBarNav>
      </Box>
      {location.pathname === "/mypage" ? (
        <Box
          value="게시글 내역"
          style={{ color: "#d75281" }}
          onClick={handleClickMypage}
        >
          게시글 내역
        </Box>
      ) : (
        <Box value="게시글 내역" onClick={handleClickMypage}>
          게시글 내역
        </Box>
      )}

      {location.pathname === "/myPage/myComment" ? (
        <Box
          value="댓글 내역"
          style={{ color: "#d75281" }}
          onClick={handleClickMyComment}
        >
          댓글 내역
        </Box>
      ) : (
        <Box value="댓글 내역" onClick={handleClickMyComment}>
          댓글 내역
        </Box>
      )}

      {location.pathname === "/myPage/receivedEnroll" ? (
        <Box
          value="신청받은 내역"
          style={{ color: "#d75281" }}
          onClick={handleClickReceivedEnroll}
        >
          신청받은 내역
        </Box>
      ) : (
        <Box value="신청받은 내역" onClick={handleClickReceivedEnroll}>
          신청받은 내역
        </Box>
      )}

      <Box value="신청한 내역">신청한 내역</Box>
    </SideBar>
  );
};

export default SideBarComponent;
