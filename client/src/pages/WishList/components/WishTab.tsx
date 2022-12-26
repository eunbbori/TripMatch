import React from "react";
import {
  WishTabContainer,
  WishTabText,
  WishTabTitle,
  WishTabUnderBar,
} from "./WishTabStyles";

interface LikeType {
  email: string;
  postId: string;
}
interface DatasProp {
  data?: LikeType[];
  likes?: string[]; //로그인 유저의 좋아요 누른 게시글의 포스트 id가 배열로 온다고 가정하고 작성함
}

const WishTab: React.FC<DatasProp> = ({ data }) => {
  return (
    <div>
      <WishTabContainer>
        <WishTabTitle>좋아요 누른 글</WishTabTitle>
        <WishTabUnderBar />
        <WishTabText>
          <span className="postNum">{data?.length ?? 0}</span>건
        </WishTabText>
      </WishTabContainer>
    </div>
  );
};

export default WishTab;
