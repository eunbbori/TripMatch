import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthFormBlock,
  Footer,
  StyledInput,
  Button,
} from "../../../components/Auth/AuthStyle";
import axios from "axios";

const FindPasswordForm = () => {
  const baseUrl = "http://34.64.156.80:3003";
  // const loginUrl = `${baseUrl}/main/auth/login`;
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("버튼은 눌려졌을걸?");
    try {
      const sendOj = { email: email };
      console.log(sendOj);
      const res = await axios.post(`${baseUrl}/api/main/auth/find`, sendOj);
      console.log("axios 전송은 됐을걸");
      if (res.status === 201) {
        console.log("요청은 성공했을걸?");
        alert(
          "입력하신 이메일로 비밀번호가 전송되었습니다. 이메일을 확인해주세요",
        );
        navigate("/login");
      } else {
        throw new Error(
          `에러코드 ${res.status}. 새 비밀번호 전송에 실패하였습니다`,
        );
      }
    } catch (error) {
      alert("이메일을 확인해주세요");
      console.error(error);
    }
  };

  return (
    <AuthFormBlock>
      <p className="pageTitle">비밀번호 찾기</p>
      <form onSubmit={onSubmitEmail}>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="on"
            name="userEmail"
            placeholder="이메일"
            onChange={onChangeEmail}
            value={email}
            required
          />
          <p className="detailText">
            새 비밀번호를 받으실 이메일을 입력해주세요
          </p>
        </div>
        <Button className="formSubmit" type="submit">
          비밀번호 찾기
        </Button>
      </form>
      <Footer>
        <Link to="/auth/login">로그인</Link>
        <Link to="/auth/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default FindPasswordForm;
