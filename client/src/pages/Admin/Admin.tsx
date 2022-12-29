import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import authAxios from "../../axios/authAxios";
import AppSelect from "../../components/AppSelect/AppSelect";
import Modal from "../../components/Modal/Modal";
import { showModal } from "../../slice/modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container, Management, MemberList, SearchBar } from "./AdminStyle";

interface UserType {
  email: string;
  nickname: string;
  createdAt: string;
  role: string;
}

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
  const [members, setMembers] = useState<UserType[]>([]);
  const [deletMember, setDeleteMember] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const { show: isShown, modalText } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const getMember = async (search?: string) => {
    const searchKeyword = search ? `?keyword=${search}` : "";
    const memberList = await authAxios
      .get(`/api/admin/users${searchKeyword}`)
      .then((res) => res.data);
    setMembers(memberList);
    return;
  };

  const deleteMember = async (email: string) => {
    await authAxios
      .delete(`/api/admin/users/${email}`)
      .then()
      .catch((err) => console.log(err));
    getMember();
    return;
  };

  const roleChange = async (email: string, role: string) => {
    let newRole = "";
    if (role === "회원") {
      newRole = "user";
    } else {
      newRole = "admin";
    }

    await authAxios
      .put(`/api/admin/users/${email}`, { role: newRole })
      .then()
      .catch((err) => console.log(err));
    return;
  };

  const deleteMemberModal = (ninkname: string, email: string) => {
    const content = `${ninkname}    ${email}    회원을 강제 탈퇴하시겠습니까?`;
    dispatch(
      showModal({
        title: "탈퇴",
        content: content,
        rightButton: "탈퇴",
      }),
    );
    return;
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
                searchRef.current.value = "";
              }
            }}
          />
        </SearchBar>
      </div>
      <MemberList>
        {members &&
          members.map((member) => {
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
                    defaultValue={member.role === "user" ? "회원" : "관리자"}
                    onChange={(e) => {
                      roleChange(member.email, e.currentTarget.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      deleteMemberModal(member.nickname, member.email);
                      setDeleteMember(member.email);
                    }}
                  >
                    탈퇴
                  </button>
                </Management>
              </div>
            );
          })}
        {isShown && <Modal callBackFn={() => deleteMember(deletMember)} />}
      </MemberList>
      <div className="showAll" onClick={() => getMember()}>
        전체회원 보기
      </div>
    </Container>
  );
};

export default Admin;
