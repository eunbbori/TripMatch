import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBar, Box } from "./SideBarStyle";

const SideBarComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickMypage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/mypage");
  };

  const handleClickMyComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/myComment");
  };

  return (
    <SideBar>
      <Box value="정보 수정">정보 수정</Box>
      {location.pathname === "/mypage" ? (
        <Box
          value="게시글 내역"
          style={{ color: "#ca8a8b" }}
          onClick={handleClickMypage}
        >
          게시글 내역
        </Box>
      ) : (
        <Box value="게시글 내역" onClick={handleClickMypage}>
          게시글 내역
        </Box>
      )}

      {location.pathname === "/myComment" ? (
        <Box
          value="댓글 내역"
          style={{ color: "#ca8a8b" }}
          onClick={handleClickMyComment}
        >
          댓글 내역
        </Box>
      ) : (
        <Box value="댓글 내역" onClick={handleClickMyComment}>
          댓글 내역
        </Box>
      )}

      <Box value="신청받은 내역">신청받은 내역</Box>
      <Box value="신청한 내역">신청한 내역</Box>
    </SideBar>
  );
};

export default SideBarComponent;
