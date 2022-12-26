import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthFormBlock,
  Footer,
  StyledInput,
  Button,
} from "../../../components/Auth/AuthStyle";
import { useImmer } from "use-immer";
import axios from "axios";

const LoginForm = () => {
  const baseUrl = "http://localhost:5000";
  // const loginUrl = `${baseUrl}/main/auth/login`;
  const navigate = useNavigate();

  const [userState, setUserState] = useImmer({
    email: "",
    password: "",
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.email = e.target.value;
    });
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState((draft) => {
      draft.password = e.target.value;
    });
  };

  // jwt 토큰 이용 로직 구현 예정
  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("버튼은 눌려졌을걸?");
    try {
      const res = await axios.post(`${baseUrl}/api/main/auth/login`, {
        email: userState.email,
        password: userState.password,
      });
      console.log("axios 전송은 됐을걸");
      if (res.status === 201) {
        console.log("요청은 성공했을걸?");
        const { refreshToken, accessToken, role, email } = res.data;
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("x-access-Token", accessToken);
        sessionStorage.setItem("roleToken", role);
        sessionStorage.setItem("email", email);
        navigate("/");
      } else {
        console.log("아이디랑 비번이 틀렸을껄?");
        alert("아이디와 비밀번호를 확인해주세요");
        throw new Error(`에러코드 ${res.status}. 회원가입에 실패하였습니다`);
      }
    } catch (error) {
      console.error(error);
    }
    // 성공하건 실패하건 비밀번호는 지워줘야함
    setUserState((draft) => {
      draft.password = "";
    });
  };

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmitLogin}>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="on"
            name="userEmail"
            placeholder="이메일"
            onChange={onChangeEmail}
            value={userState.email}
            required
          />
        </div>

        <div>
          <label htmlFor="passwordInput">password</label>
          <StyledInput
            id="passwordInput"
            autoComplete="off"
            name="Password"
            placeholder="비밀번호"
            type="password"
            onChange={onChangePassword}
            value={userState.password}
            required
          />

          <Button className="formSubmit" type="submit">
            로그인
          </Button>
        </div>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default LoginForm;
