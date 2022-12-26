import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import AppSelect from "../../components/AppSelect/AppSelect";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container, Management, MemberList, SearchBar } from "./AdminStyle";

const mockData = [
  {
    email: "111@naver.com",
    nickname: "쥰",
    role: "관리자",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "김지윤",
    role: "관리자",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "longlongemail@naver.com",
    nickname: "듐듐",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "tripMatch1234@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "jjyy5017@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
  {
    email: "111@naver.com",
    nickname: "최대길이닉네임임",
    role: "회원",
    createdAt: "2022-11-04T04:57:01.267Z",
  },
];

const joinDateFormat = (createdAt: string) => {
  return (
    createdAt.slice(0, 4) +
    "." +
    createdAt.slice(5, 7) +
    "." +
    createdAt.slice(8, 10)
  );
};

const Admin = () => {
  const [members, setMembers] = useState([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const getMember = async (search?: string) => {
    const searchKeyword = search ? `?keyword=${search}` : "";
    const memberList = await axios
      .get(`/api/admin/users${searchKeyword}`)
      .then((res) => res.data);
    setMembers(memberList);
    return;
  };

  const deleteMember = async (email: string) => {
    await axios
      .delete(`/api/admin/users/${email}`)
      .then()
      .catch((err) => console.log(err));
  };

  const roleChange = async (email: string, role: string) => {
    await axios
      .put(`/api/admin/users/${email}`, { role: role })
      .then()
      .catch((err) => console.log(err));
  };

  const deleteMemberModal = (ninkname: string, email: string) => {
    const content = `${ninkname}${email} 
      회원을 강제 탈퇴하시겠습니까?`;
    dispatch(
      showModal({
        title: "탈퇴",
        content: content,
        rightButton: "탈퇴",
      }),
    );
  };

  useEffect(() => {
    getMember();
  }, []);

  return (
    <Container>
      <div className="title">
        <h3>회원관리</h3>
        <SearchBar>
          <input type="text" ref={searchRef} placeholder="회원 검색"></input>
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
            alt="검색"
            onClick={() => {
              if (searchRef.current?.value) {
                getMember(searchRef.current.value);
              }
            }}
          />
        </SearchBar>
      </div>
      <MemberList>
        {mockData &&
          mockData.map((member) => {
            return (
              <div className="member" key={member.email}>
                <div className="name">
                  <div className="nickname">{member.nickname}</div>
                  <div className="email">{member.email}</div>
                </div>
                <span className="joinDate">
                  {joinDateFormat(member.createdAt)} 가입
                </span>
                <Management>
                  <AppSelect
                    options={["회원", "관리자"]}
                    className="role"
                    defaultValue={member.role}
                    onChange={(e) => {
                      roleChange(member.email, e.currentTarget.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      deleteMemberModal(member.nickname, member.email);
                    }}
                  >
                    탈퇴
                  </button>
                </Management>
              </div>
            );
          })}
        {isShown && <Modal />}
      </MemberList>
    </Container>
  );
};

export default Admin;
