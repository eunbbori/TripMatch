import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { matchMockData, freeMockData } from "./components/mockData";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Title title="동행게시판" location="/" />
      <MakeMatchPostList data={matchMockData} />
      <FreePostPreview freePostList={freeMockData} location="/" />
      <FestivalList location="/" />
      {/* <ReviewModal email="naver.com" /> */}
    </div>
  );
};

export default Home;
