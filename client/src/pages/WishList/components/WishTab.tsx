import React from "react";
import {
  WishTabContainer,
  WishTabText,
  WishTabTitle,
  WishTabUnderBar,
} from "./WishTabStyles";

const WishTab = () => {
  return (
    <div>
      <WishTabContainer>
        <WishTabTitle>좋아요 누른 글</WishTabTitle>
        <WishTabUnderBar />
        <WishTabText>
          <span className="postNum">4</span>건
        </WishTabText>
      </WishTabContainer>
    </div>
  );
};

export default WishTab;
