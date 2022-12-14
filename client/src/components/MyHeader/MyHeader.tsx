import React from "react";
import Header from "./MyHeaderStyle";
import heart from "../../images/temporaryIconHeart.png";
import bubble from "../../images/temporaryIconbubble.png";
import human from "../../images/temporaryIconHuman.png";
import shake from "../../images/temporaryIconShake.png";

const MyHeader = () => {
  return (
    <Header>
      <div className="logo">TripMatch</div>
      <div className="searchBar">
        <input type="text" placeholder="지역명으로 검색해 보세요."></input>
      </div>
      <div className="navBar">
        <img src={shake} />
        <img src={bubble} />
        <img src={heart} />
        <img src={human} />
      </div>
    </Header>
  );
};

export default MyHeader;
