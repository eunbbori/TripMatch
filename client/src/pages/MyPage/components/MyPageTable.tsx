import React, { useState, useEffect } from "react";
import { Content, StyledLink, Layer } from "./TableContentStyle";
import authAxios from "../../../axios/authAxios";
import { useUpdateMatchPostMutation } from "../../../slice/matchPostApi";
import type { MatchPostType } from "./../../../type/matchPost";

export interface StatusType {
  status: boolean;
}

const MyPageTable: React.FC = () => {
  const [data, setData] = useState<MatchPostType[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [updatePost, { isSuccess }] = useUpdateMatchPostMutation();

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
                  return (
                    <tr key={item.postId}>
                      <td id="title">
                        <StyledLink to={`/match/${item.postId}`}>
                          {item.title}
                        </StyledLink>
                      </td>
                      <td>{item.region}</td>
                      <td>
                        {item.duration[0]} ~ {item.duration[1]}
                      </td>
                      {item.status === false ? (
                        <td id="last">
                          <select disabled>
                            <option value="모집중">모집마감</option>
                            <option value="모집마감">모집마감</option>
                          </select>
                        </td>
                      ) : (
                        <td id="last">
                          <select
                            onChange={(e) => {
                              e.target.disabled = true;
                              updatePost({ ...item, status: false });
                            }}
                          >
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
