import React from "react";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import { freeMockData } from "../Home/components/mockData";
import { Content, Keyword, SearchStyle } from "./SearchStyle";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation().pathname;

  return (
    <SearchStyle>
      <Keyword>&apos;{location.split("/")[2]}&#39;의 검색 결과입니다.</Keyword>
      <Title title="동행게시판" location={location} />
      <Content>
        <MakeMatchPostList />
      </Content>
      <Title title="자유게시판" location={location} />
      <Content>
        <FreePostPreview freePostList={freeMockData} location={location} />
      </Content>
    </SearchStyle>
  );
};

export default Search;
