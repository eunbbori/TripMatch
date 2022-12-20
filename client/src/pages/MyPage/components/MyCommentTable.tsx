import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import axios from "axios";

// export interface UserInfo {
//   userId: number;
//   nickname: string;
//   profileImg?: string;
//   tripCount?: number;
//   score?: number;
//   posts: Post[];
// }

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

const MyCommentTable: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  const baseUrl = "https://e14cb7f4-6c52-45e6-84b4-2e92c7458bf0.mock.pstmn.io";

  useEffect(() => {
    const postData = async () => {
      const fetchData = await axios.get(baseUrl + "/commentedPost");
      setData(fetchData.data.posts);
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
            {data?.map((item) => {
              console.log(item);
              return (
                <tr key={item.postId}>
                  <td id="title">{item.title}</td>
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
