import React from "react";
import Container from "./MatchPostPreviewStyle";
import { Link } from "react-router-dom";

const MatchPostPreview = () => {
  return (
    <Container>
      <div className="title">
        <h2>동행게시판</h2>
        <Link to="/">더보기</Link>
      </div>
    </Container>
  );
};

export default MatchPostPreview;
