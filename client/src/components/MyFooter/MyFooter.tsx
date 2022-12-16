import Footer from "./MyFooterStyle";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <Footer>
      <div className="info">
        <div className="comInfo">
          <div>(주)TripMatch</div>
          <div>
            <span>대표</span>
            <span>토끼씨</span>
          </div>
          <div>
            <span>개인정보보호책임</span>
            <span>김제원</span>
          </div>
          <div>국내시 동행구 여행동 82길 28</div>
        </div>
        <div className="legalInfo">
          <span>개인정보처리방침</span>
          <span>|</span>
          <span>이용약관</span>
          <span>|</span>
          <span>취소 및 환불정책</span>
          <span>|</span>
          <span>파트너 입점 문의</span>
        </div>
        <div className="copyright">
          Copyright © TRIPMATCH Inc. All Rights Reserved.
        </div>
        <div className="snsLogo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/freeIconInstagram_uviyex.png"
              alt="인스타그램"
            />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/freeIconTwitter_djkce8.png"
              alt="트위터"
            />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095094/freeIconFacebook_oegnua.png"
              alt="페이스북"
            />
          </Link>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
