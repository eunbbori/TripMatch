import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";

const Home = () => {
  return (
    <div>
      <Carousel />
      <MakeMatchPostList />
      <FreePostPreview />
      <FestivalList />
    </div>
  );
};

export default Home;
