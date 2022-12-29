import React from "react";
import { Link, useLocation } from "react-router-dom";
import TitleStyle, { NoticeStyle } from "./TitleStyle";

interface TitleProps {
  title: string;
  location: string;
}

const Title: React.FC<TitleProps> = ({ title, location }) => {
  let link = "";
  switch (title) {
    case "동행게시판":
      link = "/match";
      break;
    case "자유게시판":
      link = "/free";
      break;
    case "여행정보":
      link = "tripinfo";
      break;
    default:
      link = "/";
  }

  return location !== "/notice" ? (
    <TitleStyle>
      <h3>{title}</h3>
      {location === "/" && <Link to={link}>더보기 &gt;</Link>}
    </TitleStyle>
  ) : (
    <NoticeStyle>
      <h3>{title}</h3>
      <div></div>
    </NoticeStyle>
  );
};

export default Title;
