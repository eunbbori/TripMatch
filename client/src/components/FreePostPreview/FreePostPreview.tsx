import React from "react";
import Container from "./FreePostPreviewStyle";
import { Link } from "react-router-dom";

const FreePostPreview = () => {
  return (
    <Container>
      <div className="title">
        <h2>자유게시판</h2>
        <Link to="/">더보기</Link>
      </div>
    </Container>
  );
};

export default FreePostPreview;
