import Header from "./MyHeaderStyle";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <Header>
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671436634/temporaryLogo_l9x22i.png"
            alt="TripMatch"
          />
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="지역명으로 검색해 보세요."></input>
        <img
          src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
          alt="검색"
        />
      </div>
      <div className="navBar">
        <Link to="/">
          <img
            className="firstImg"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconShake_jywmku.png"
            alt="동행게시판"
          />
        </Link>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconbubble_h1lmf7.png"
            alt="자유게시판"
          />
        </Link>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-heart-shape-39559_aatqxl.png"
            alt="위시리스트"
          />
        </Link>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconHuman_j9fibe.png"
            alt="마이페이지"
          />
        </Link>
      </div>
    </Header>
  );
};

export default MyHeader;
