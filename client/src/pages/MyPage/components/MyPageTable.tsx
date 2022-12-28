import React, { useState, useEffect } from "react";
import { Content, Layer } from "./TableContentStyle";
import { PostType } from "../../../type/userPost";
import authAxios from "../../../axios/authAxios";
import axios from "axios";
import { Link } from "react-router-dom";

interface TripMatchPostType {
  title: string;
  content: string;
  region: string;
  hopeGender: string;
  thumbnail: string;
  contact: string;
  duration: string[];
  hopeAge: string[];
  status: StatusType;
}

export interface StatusType {
  status: boolean;
}

const MyPageTable: React.FC = () => {
  const [data, setData] = useState<PostType[]>([]);
  const [post, setPost] = useState<TripMatchPostType[]>([]);
  const [state, setState] = useState<boolean>(false);
  // const [state, setState] = useState<StatusType>({
  //   status: true,
  // });
  // const [status, setStatus] = useState(true);
  // const selectRef = useRef<HTMLSelectElement>(null);

  //const baseUrl = "http://34.64.156.80:3003";

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(`/api/main/mypage/posts`);
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    if (state) {
      getData();
    }
  }, [state]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await authAxios.get(`/api/main/mypage/posts`);
        setData(fetchData.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);
  //console.log(data);

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
              {data &&
                data.map((item) => {
                  const handleChangeValue = async (
                    e: React.ChangeEvent<HTMLSelectElement>,
                  ) => {
                    e.preventDefault();

                    try {
                      const postData = await axios.get(
                        `http://34.64.156.80:3003/api/main/posts/${item.postId}`,
                      );

                      if (postData.status === 200) {
                        setPost(postData.data);
                      }
                    } catch (err: unknown) {
                      console.error(err);
                    }

                    const value = e.target.value;
                    console.log(value);
                    const boolean = value === "모집중" ? true : false;
                    console.log(boolean);

                    try {
                      const put = await authAxios.put(
                        `/api/main/posts/${item.postId}`,
                        {
                          ...post,
                          status: boolean,
                        },
                      );
                      if (put.status === 200) {
                        setState(true);
                        setPost([...post]);
                      }
                    } catch (err: unknown) {
                      console.error(err);
                    }
                  };
                  return (
                    <tr key={item.postId}>
                      <td id="title">
                        <Link to={`/mypage/mycontents/${item.postId}`}>
                          {item.title}
                        </Link>
                      </td>
                      <td>{item.region}</td>
                      <td>
                        {item.duration[0]} ~ {item.duration[1]}
                      </td>
                      {item.status === false ? (
                        <td id="last">
                          <select onChange={handleChangeValue} disabled>
                            <option value="모집중">모집마감</option>
                            <option value="모집마감">모집마감</option>
                          </select>
                        </td>
                      ) : (
                        <td id="last">
                          <select onChange={handleChangeValue}>
                            <option value="모집중">모집중</option>
                            <option value="모집마감">모집마감</option>
                          </select>
                        </td>
                      )}
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
    </>
  );
};

export default MyPageTable;
