import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import { PostType } from "../../../type/myComments";
import axios from "axios";
import { Link } from "react-router-dom";

const MyCommentTable: React.FC = () => {
  const [data, setData] = useState<PostType[]>([]);

  // const baseUrl = "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io/commentedPost";

  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get("http://localhost:4000/commentedPost");
      setData(fetchData.data[0].posts);
    };
    postData();
  }, []);

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
            {data?.map((item) => {
              return (
                <tr key={item.postId}>
                  <td id="title">
                    <Link to={`/mypage/mycomment/${item.postId}`}>
                      {item.title}
                    </Link>
                  </td>
                  <td>{item.region}</td>
                  <td>
                    {item.duration[0].start} ~ {item.duration[0].end}
                  </td>
                  <td id="last">{item.author.nickname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layer>
    </Content>
  );
};

export default MyCommentTable;
