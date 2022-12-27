import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import Title from "../../components/Title/Title";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";
import NotFound from "../../components/NotFound/NotFound";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [img, setImg] = useState<File | string>("");
  const [imgUrl, setImgUrl] = useState("");
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

  const uploadimg = async (data: FormData) => {
    await axios
      .post("https://api.cloudinary.com/v1_1/dk9scwone/image/upload", data)
      .then((res) => setImgUrl(res.data.url))
      .catch((err) => alert(err));
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImg(e.target.files[0]); //input에 들어온 파일을 img 변수에 저장
          }
        }}
      />
      <button
        onClick={() => {
          const imgData = new FormData(); //formdata 객체 생성
          imgData.append("file", img); //객체에 파일값 넣음
          imgData.append("upload_preset", "tripMatch"); //클라우디너리 설정값이므로 반드시 넣어주세요.
          imgData.append("cloud_name", "dk9scwone");
          uploadimg(imgData);
        }}
      >
        업로드
      </button>
      {imgUrl.length !== 0 && <div>{imgUrl}</div>}
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
