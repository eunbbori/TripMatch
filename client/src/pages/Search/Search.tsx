import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import { Content, Keyword, SearchStyle } from "./SearchStyle";
import { useLocation } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import { useGetSearchPostQuery } from "../../slice/searchApi";

const Search = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const email = sessionStorage.getItem("email");
  const keyword = location.split("/")[2];

  const {
    data: searchData,
    isError: searchError,
    isLoading: searchLoading,
  } = useGetSearchPostQuery({ keyword, ...(email && { email }) });

  return (
    <SearchStyle>
      <Keyword>&apos;{location.split("/")[2]}&#39;의 검색 결과입니다.</Keyword>
      <Title title="동행게시판" location="/search" />
      <Content>
        {searchData ? (
          <MakeMatchPostList data={searchData.posts} location="search" />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
      <Title title="자유게시판" location="/search" />
      <Content>
        {searchData ? (
          <FreePostPreview
            freePostList={searchData.communities}
            location="/search"
          />
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
    </SearchStyle>
  );
};

export default Search;
