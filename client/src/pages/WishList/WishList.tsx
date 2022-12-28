import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishListContents from "./components/WishListContents";
import WishTab from "./components/WishTab";
import authAxios from "../../axios/authAxios";

// const baseUrl = "http://localhost:3003";

const WishList = () => {
  const [dataList, setDataList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getLikedDataList = async () => {
      try {
        const res = await authAxios.get(`/api/main/likes`);
        if (res.status === 200) {
          setDataList(res.data);
        } else if (res.status === 204) {
          alert("좋아요를 누른 동행게시글이 없습니다");
        } else {
          throw new Error(
            `에러코드 ${res.status}. 페이지 요청에 실패하였습니다`,
          );
        }
      } catch (error) {
        console.error(error);
        navigate("/auth/login");
      }
    };
    getLikedDataList();
  }, [navigate]);

  return (
    <div>
      <WishTab data={dataList} />
      <WishListContents data={dataList} likes={dataList} />
    </div>
  );
};
export default WishList;
