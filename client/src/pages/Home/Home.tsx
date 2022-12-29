import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import NotFound from "../../components/NotFound/NotFound";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";

const Home = () => {
  const email = sessionStorage.getItem("email");

  const {
    data: matchData,
    isError: matchError,
    isLoading: matchLoading,
  } = useGetAllMatchPostQuery({ page: 1, ...(email && { email }) });

  const {
    data: freeData,
    isError: freeError,
    isLoading: freeLoading,
  } = useGetAllFreePostQuery({ page: 1 });

  return (
    <>
      <Carousel />
      <Title title="동행게시판" location="/" />
      {matchData ? <MakeMatchPostList data={matchData.posts} /> : <NotFound />}
      <Title title="자유게시판" location="/" />
      {freeData ? (
        <FreePostPreview freePostList={freeData?.communities} location="/" />
      ) : (
        <NotFound />
      )}
      <FestivalList location="/" />
    </>
  );
};

export default Home;
