import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "./components/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "./HomeStyle";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
        <Title>
          <h3>동행게시판</h3>
          <Link to="/">더보기</Link>
        </Title>
        <MakeMatchPostList />
        <FreePostPreview />
        <FestivalList location="home" />
        {/* <ReviewModal email="naver.com" /> */}
      </div>
    </div>
  );
};

export default Home;
