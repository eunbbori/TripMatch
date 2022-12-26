import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "./components/Carousel";
import FestivalList from "../../components/FestivalList/FestivalList";
import FreePostPreview from "../../components/FreePostPreview/FreePostPreview";
import MakeMatchPostList from "../../components/MakeMatchPostList/MakeMatchPostList";
import { matchMockData, freeMockData } from "./components/mockData";
import Title from "../../components/Title/Title";
import { useUpdateImgMutation } from "../../slice/uploadImgApi";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";
import NotFound from "../../components/NotFound/NotFound";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";

const Home = () => {
  const {
    data: matchData,
    isError: matchError,
    isLoading: matchLoading,
  } = useGetAllMatchPostQuery({ page: 1 });

  const {
    data: freeData,
    isError: freeError,
    isLoading: freeLoading,
  } = useGetAllFreePostQuery({ page: 1 });

  // useUpdateImgMutation을 import하여 사용해 주세요.
  // input에서 파일을 선택했을 때 바로 updateImg 함수를 적용하지 마세요.
  // input onChange에 함수를 걸어버리시면 사용자가 input에서 사진을 바꿀 때마다(사용자가 어떤 사진을 올릴지 고민할 때...) 클라우드에 업로드 됩니다.
  // useState나 useRef와 같은 hook을 통해 input 내의 파일 변화값을 따로 다뤄 주세요.
  // 그 후에 '업로드하기'와 같은 버튼(개인정보 수정페이지에서는 수정 버튼이거나 게시글 등록 페이지에서는 게시글 등록 버튼이겠쬬?)을 눌렀을때
  // updateImg 함수가 실행되도록 해주세요.
  // 제 개인 클라우디너리 계정에 연결해 둔 상태라 테스트하실 때는 되도록 작은 용량의 파일로 해주시면 좋겠습니닷🙏
  // 사용 예시 아래 참고

  //useRef 사용하고 싶었는데 타입과 싸우다가 포기하고 useState로... useRef로 성공하신 분들은 알려주세요ㅠㅠ
  const [img, setImg] = useState<File | string>("");
  const [updateImg, { error: UploadImgError, isLoading: UploadImgIsLoading }] =
    useUpdateImgMutation();
  // const {
  //   data: MatchPost,
  //   error: MatchPostError,
  //   isLoading: MatchPostIsLoading,
  // } = useGetAllMatchPostQuery({ page: 1, region: "", status: "" });

  return (
    <>
      {/* 사진 업로드 input 예시 */}
      <input
        name="photo"
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
          imgData.append("cloud_name", "dk9scwone"); //클라우디너리 설정값이므로 반드시 넣어주세요.

          updateImg(imgData)
            .unwrap()
            .then((res) => {
              console.log(Object.values(res)[15]);
              //res.url로 바로 출력이 안되어서 돌아돌아 url이 출력되도록 했습니다. 이유는 오피스아워 시간에 알아보는 걸로...
            })
            .catch((err) => console.log(err));
        }}
      >
        업로드하기
      </button>
      {UploadImgError && <div>에러</div>}
      {UploadImgIsLoading && <div>로딩중...</div>}
      {/* 예시는 여기까지 */}

      <Carousel />
      <Title title="동행게시판" location="/" />
      {matchData ? <MakeMatchPostList data={matchData.posts} /> : <NotFound />}
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
