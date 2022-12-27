import { Header, AlertModal } from "./MyHeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const MyHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const onSearch = () => {
    if (!searchRef.current?.value) {
      setAlert(true);
    } else {
      navigate(`/search/${searchRef.current?.value}`);
      searchRef.current.value = "";
    }
  };

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
        <input
          type="text"
          ref={searchRef}
          placeholder="지역명으로 검색해 보세요."
        ></input>
        <img
          src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
          alt="검색"
          onClick={() => {
            onSearch();
          }}
        />
      </div>
      <div className="navBar">
        <Link
          to={sessionStorage.getItem("x-access-token") ? "/match" : "/login"}
        >
          <img
            className="firstImg"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconShake_jywmku.png"
            alt="동행게시판"
          />
        </Link>
        <Link
          to={sessionStorage.getItem("x-access-token") ? "/free" : "/login"}
        >
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconbubble_h1lmf7.png"
            alt="자유게시판"
          />
        </Link>
        <Link
          to={sessionStorage.getItem("x-access-token") ? "/wishlist" : "/login"}
        >
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-heart-shape-39559_aatqxl.png"
            alt="위시리스트"
          />
        </Link>
        <Link
          to={
            !sessionStorage.getItem("x-access-token")
              ? "/login"
              : sessionStorage.getItem("roleToken") === "admin"
              ? "/admin"
              : "/mypage/userInfo"
          }
        >
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconHuman_j9fibe.png"
            alt="마이페이지"
          />
        </Link>
      </div>
      {alert && (
        <AlertModal>
          <div className="modalCard">
            <div>검색어를 입력해 주세요.</div>
            <button
              onClick={() => {
                setAlert(false);
              }}
            >
              확인
            </button>
          </div>
        </AlertModal>
      )}
    </Header>
  );
};

export default MyHeader;
