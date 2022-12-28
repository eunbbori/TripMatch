import { useCallback, useEffect, useState } from "react";
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
  const email = sessionStorage.getItem("email");
  const location = decodeURIComponent(useLocation().pathname);

  const getSearchData = async () => {
    const keyword = location.split("/")[2];

    const searchData = await axios
      .get(
        `http://34.64.156.80:3003/api/main/search?keyword=${keyword}${
          email ? `&email=${email}` : ""
        }`,
      )
      .then((res) => res.data)
      .catch((err) => alert("문제가 발생했습니다. 다시 시도해 주세요."));

    setSearchMatch(searchData.posts);
    setSearchFree(searchData.communities);
    console.log(searchData);
  };
  console.log(searchMatch);
  console.log(searchFree);

  const getSearchDataCallback = useCallback(getSearchData, [email, location]);

  useEffect(() => {
    getSearchDataCallback();
  }, [getSearchDataCallback]);

  return (
    <SearchStyle>
      <Keyword>&apos;{location.split("/")[2]}&#39;의 검색 결과입니다.</Keyword>
      <Title title="동행게시판" location="/search" />
      <Content>
        {searchMatch.length !== 0 ? (
          <MakeMatchPostList data={searchMatch} />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
      <Title title="자유게시판" location="/search" />
      <Content>
        {searchFree.length !== 0 ? (
          <FreePostPreview freePostList={searchFree} location="/search" />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
    </SearchStyle>
  );
};

export default Search;
