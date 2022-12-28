import { Header, AlertModal, MyPageModal } from "./MyHeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const MyHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [myPageDrop, setMyPageDrop] = useState(false);

  const role = sessionStorage.getItem("roleToken");

  const onSearch = () => {
    if (!searchRef.current?.value) {
      setAlert(true);
    } else {
      navigate(`/search/${searchRef.current?.value}`);
      searchRef.current.value = "";
    }
  };

  const getDropDownForUserType = () => {
    if (role === "user" && myPageDrop) {
      return (
        <MyPageModal
          onMouseEnter={() => {
            setMyPageDrop(true);
          }}
          onMouseLeave={() => {
            setMyPageDrop(false);
          }}
        >
          <div className="modalCard">
            <div onClick={() => navigate("/mypage/userInfo")}>마이페이지</div>
            <div
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/";
              }}
            >
              로그아웃
            </div>
          </div>
        </MyPageModal>
      );
    } else if (role === "admin" && myPageDrop) {
      return (
        <MyPageModal
          onMouseEnter={() => {
            setMyPageDrop(true);
          }}
          onMouseLeave={() => {
            setMyPageDrop(false);
          }}
        >
          <div className="modalCard">
            <div onClick={() => navigate("/admin")}>회원관리페이지</div>
            <div
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/";
              }}
            >
              로그아웃
            </div>
          </div>
        </MyPageModal>
      );
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
        <Link to="/match">
          <img
            className="firstImg"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconShake_jywmku.png"
            alt="동행게시판"
          />
        </Link>
        <Link to="/free">
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconbubble_h1lmf7.png"
            alt="자유게시판"
          />
        </Link>
        <Link to={role ? "/wishlist" : "/auth/login"}>
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671184505/free-icon-heart-shape-39559_aatqxl.png"
            alt="위시리스트"
          />
        </Link>
        <Link
          to={
            role
              ? role === "user"
                ? "/mypage/userInfo"
                : "/admin"
              : "/auth/login"
          }
        >
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/temporaryIconHuman_j9fibe.png"
            alt="마이페이지"
            onMouseEnter={() => {
              if (!role) {
                setMyPageDrop(false);
              } else {
                setMyPageDrop(true);
              }
            }}
            onMouseLeave={() => {
              setMyPageDrop(false);
            }}
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
      {getDropDownForUserType()}
    </Header>
  );
};

export default MyHeader;
