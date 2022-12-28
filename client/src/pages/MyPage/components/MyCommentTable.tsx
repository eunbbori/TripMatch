import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import { CommentType } from "../../../type/myComments";
import { Link } from "react-router-dom";
import axios from "axios";
import authAxios from "../../../axios/authAxios";

const MyCommentTable: React.FC = () => {
  const [data, setData] = useState<CommentType[]>([]);

  useEffect(() => {
    const postData = async () => {
      try {
        const fetchData = await authAxios.get("/api/main/mypage/comments");
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    postData();
  }, []);
  console.log(data);

  return (
    <Content>
      <Layer>
        <table>
          <thead>
            <tr id="first">
              <th>제목</th>
              <th>지역</th>
              <th>여행기간</th>
              <th>작성자</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.postId}>
                    <td id="title">
                      <Link to={`/mypage/mycomment/${item.postId}`}>
                        {item.title}
                      </Link>
                    </td>
                    <td>{item.region}</td>
                    <td>
                      {item.duration[0]} ~ {item.duration[1]}
                    </td>
                    <td id="last">{item.author.nickname}</td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default MyCommentTable;
