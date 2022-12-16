import React from "react";
import Top from "../../components/MyPage/Top/Top";
import SideBar from "../../components/MyPage/SideBar/SideBar";
import { Body, Container, MidContainer, Content, Layer } from "./MyPageStyle";

interface UserData {
  title: any;
  region?: any;
  duration?: any;
  writer?: any;
  register?: any;
}

const MyPage: React.FC<UserData> = ({ title, region, duration }) => {
  return (
    <>
      <Body>
        <Container>
          <Top name={"doylee"} tripCount={32} score={4.5} />
          <MidContainer>
            <SideBar />
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
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>{title}</td>
                      <td>{region}</td>
                      <td>{duration}</td>
                      <td id="last">
                        <select name="" id="">
                          <option value="모집중">모집중</option>
                          <option value="모집마감">모집마감</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Layer>
            </Content>
          </MidContainer>
        </Container>
      </Body>
    </>
  );
};

export default MyPage;
