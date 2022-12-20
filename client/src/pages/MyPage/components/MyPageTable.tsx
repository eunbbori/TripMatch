import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import axios from "axios";

export interface UserInfo {
  userId: number;
  nickname: string;
  profileImg?: string;
  tripCount?: number;
  score?: number;
  posts: Post[];
}

export interface Post {
  postId: number;
  author: Author;
  region: string;
  title: string;
  duration: DateType[];
  createdAt: Date;
}

export interface Author {
  authorId: number;
  nickname: string;
  profileImg?: string;
}

export interface DateType {
  start: any;
  end: any;
}

const MyPageTable: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  const baseUrl = "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io";

  useEffect(() => {
    const getData = async () => {
      const fetchData = await axios.get(baseUrl + "/userInfo");
      setData(fetchData.data.posts);
    };
    getData();
  }, []);

  console.log(data);

  // const handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value;
  //   const putData = async () => {
  //     const fetchData = await axios.put(baseUrl + "/userInfo");
  //     value === "모집중" ? true : false;
  //     fetchData.data.posts.status = value;
  //     setData(fetchData.data.posts);
  //   };
  //   putData();
  // };

  return (
    <>
      <Content>
        <Layer>
          <table>
            <thead>
              <tr id="first">
                <th>제목</th>
                <th>지역</th>
                <th>여행기간</th>
                <th>상태</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item) => {
                console.log(item);
                return (
                  <tr key={item.postId}>
                    <td id="title">{item.title}</td>
                    <td>{item.region}</td>
                    <td>
                      {item.duration[0].start} ~ {item.duration[0].end}
                    </td>
                    <td id="last">
                      <select>
                        <option value="모집중">모집중</option>
                        <option value="모집마감">모집마감</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Layer>
      </Content>
    </>
  );
};

export default MyPageTable;
