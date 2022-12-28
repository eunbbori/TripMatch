import React from "react";
import {
  Container,
  MainContent,
  PostInfo,
  Region,
  Category,
  Title,
  UserInfo,
  Nickname,
  SeparateLine,
  CreatedDate,
  CommentInfo,
  CommentImage,
  CommentCount,
  FreePostLink,
} from "./FreePostListStyle";
import { FreePostType } from "../../type/freePost";
import CommentLogo from "../../images/comment-dots.png";
import { dateFormat } from "../../util/dateFormatting";

interface FreePostProps {
  region: string;
  communities: FreePostType[];
}

const FreePostList: React.FC<FreePostProps> = ({ region, communities }) => {
  return (
    <Container>
      {communities
        .filter((data) => region === "전체" || data.region === region)
        .map((data, i) => {
          const url = `/free/${data.communityId}`;
          return (
            <FreePostLink key={i} to={url}>
              <div className="container" key={i}>
                <MainContent>
                  <PostInfo>
                    <Region>[{data.region}]</Region>
                    <Category>[{data.category}]</Category>
                    <Title>{data.title}</Title>
                  </PostInfo>
                  <UserInfo>
                    <Nickname>{data.author?.nickname}</Nickname>
                    <SeparateLine>|</SeparateLine>
                    <CreatedDate>
                      {dateFormat(data.createdAt || "")}
                    </CreatedDate>
                  </UserInfo>
                </MainContent>
                <CommentInfo>
                  <CommentImage src={CommentLogo} alt="" />
                  <CommentCount>{data.commentCount}</CommentCount>
                </CommentInfo>
              </div>
            </FreePostLink>
          );
        })}
    </Container>
  );
};

export default FreePostList;
