import React from "react";
import { Container, MemberList, SearchBar } from "./AdminStyle";

const mockData = [
  {
    userID: "1",
    email: "111@naver.com",
    nickname: "쥰",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "2",
    email: "111@naver.com",
    nickname: "김지윤",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "3",
    email: "longlongemail@naver.com",
    nickname: "듐듐",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "tripMatch1234@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "jjyy5017@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    userID: "4",
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
];

const Admin = () => {
  const joinDateFormat = (createdAt: string) => {
    return (
      createdAt.slice(0, 4) +
      "." +
      createdAt.slice(5, 7) +
      "." +
      createdAt.slice(8, 10)
    );
  };
  return (
    <Container>
      <div className="title">
        <h3>회원관리</h3>
        <SearchBar>
          <input type="text" placeholder="닉네임 검색"></input>
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
            alt="검색"
          />
        </SearchBar>
      </div>
      <MemberList>
        {mockData &&
          mockData.map((member) => {
            return (
              <div className="member" key={member.userID}>
                <div className="name">
                  <div className="nickname">{member.nickname}</div>
                  <div className="email">{member.email}</div>
                </div>
                <span className="joinDate">
                  {joinDateFormat(member.createdAt)} 가입
                </span>
                <button>탈퇴</button>
              </div>
            );
          })}
      </MemberList>
    </Container>
  );
};

export default Admin;
