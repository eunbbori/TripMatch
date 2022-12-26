import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishListContents from "./components/WishListContents";
import WishTab from "./components/WishTab";

const baseUrl = "http://localhost:5000";

const WishListPage = () => {
  const [dataList, setDataList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getLikedDataList = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/main/likes`);
        if (res.status === 200) {
          setDataList(res.data);
        } else {
          throw new Error(
            `에러코드 ${res.status}. 페이지 요청에 실패하였습니다`,
          );
        }
      } catch (error) {
        console.error(error);
        // navigate("/login");
      }
    };
    getLikedDataList();
  });

  return (
    <div>
      <WishTab />
      <WishListContents data={dataList} likes={dataList} />
    </div>
  );
};
export default WishListPage;