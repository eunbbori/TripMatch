import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MatchPostPreview from "../../components/MatchPostPreview/MatchPostPreview";

const Home = () => {
  return (
    <div>
      <Carousel />
      <MatchPostPreview />
      <FreePostPreview />
    </div>
  );
};

export default Home;
