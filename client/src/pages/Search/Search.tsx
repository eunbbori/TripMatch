import { useLocation } from "react-router-dom";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import Title from "../../components/Title/Title";
import NotFound from "../../components/NotFound/NotFound";
import { Content, Keyword, SearchStyle } from "./SearchStyle";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";

const Search = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const email = sessionStorage.getItem("email");
  const keyword = location.split("/")[2];

  const {
    data: matchData,
    isError: matchError,
    isLoading: matchLoading,
  } = useGetAllMatchPostQuery({
    ...(email && { email }),
    keyword: `${keyword}`,
  });

  const {
    data: freeData,
    isError: freeError,
    isLoading: freeLoading,
  } = useGetAllFreePostQuery({
    ...(email && { email }),
    keyword: `${keyword}`,
  });

  return (
    <SearchStyle>
      <Keyword>&apos;{location.split("/")[2]}&#39;의 검색 결과입니다.</Keyword>
      <Title title="동행게시판" location="/search" />
      <Content>
        {matchData ? (
          matchData.posts.length !== 0 ? (
            <MakeMatchPostList data={matchData.posts} />
          ) : (
            <NotFound message="검색 결과가 없습니다." />
          )
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
      <Title title="자유게시판" location="/search" />
      <Content>
        {freeData ? (
          freeData.communities.length !== 0 ? (
            <FreePostPreview
              freePostList={freeData.communities}
              location="/search"
            />
          ) : (
            <NotFound message="검색 결과가 없습니다." />
          )
        ) : (
          <NotFound message="검색 결과가 없습니다." />
        )}
      </Content>
    </SearchStyle>
  );
};

export default Search;
