import React, { useCallback, useEffect, useState } from "react";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import { Content, Keyword, SearchStyle } from "./SearchStyle";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NotFound from "../../components/NotFound/NotFound";

const Search = () => {
  const [searchMatch, setSearchMatch] = useState([]);
  const [searchFree, setSearchFree] = useState([]);
  const location = decodeURIComponent(useLocation().pathname);
  const keyword = location.split("/")[2];
  const email = sessionStorage.getItem("email");

  const searchAxios = axios.create({
    baseURL: "http://34.64.156.80:3003",
  });

  // async function getSearchData() {
  //   const data = await searchAxios
  //     .get(
  //       `/api/main/search?keyword=${keyword}${email ? `&email=${email}` : ""}`,
  //     )
  //     .then((res) => res.data)
  //     .catch((err) => alert(err));

  //   setSearchMatch(data.posts);
  //   setSearchFree(data.communities);
  // }

  // useEffect(() => {
  //   getSearchData();
  // }, [keyword, getSearchData]);

  return (
    <SearchStyle>
      <Keyword>&apos;{location.split("/")[2]}&#39;의 검색 결과입니다.</Keyword>
      <Title title="동행게시판" location={location} />
      <Content>
        {searchMatch.length !== 0 ? (
          <MakeMatchPostList data={searchMatch} />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
      <Title title="자유게시판" location={location} />
      <Content>
        {searchFree.length !== 0 ? (
          <FreePostPreview freePostList={searchFree} location={location} />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
    </SearchStyle>
  );
};

export default Search;

// /api/main/search	get	query:{keyword:string,email?:string}	200 / {communities:[{communityId:string,title:string,region:string,category:string,author:{email,nickname,profileImg},createdAt:string,commentCount:number}, ......],posts:[{postId:string,title:string,region:string,thumbnail:string,like?:boolean}, .......]}
