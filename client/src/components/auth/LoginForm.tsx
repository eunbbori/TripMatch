import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthFormBlock, Footer, StyledInput, Button } from "./AuthStyle";
import { useImmer } from "use-immer";
import axios from "axios";

const LoginForm = () => {
  const domain = "http://localhost:5000";
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
    const res = await axios.post(`${domain}/main/auth/login`);
    if (res.status === 201) {
      console.log("요청은 성공했을걸?");
      navigate("/");
    } else if (res.status === 400) {
      console.log("아이디랑 비번이 틀렸을껄?");
      setUserState((draft) => {
        draft.email = "";
        draft.password = "";
      });
      alert("아이디와 비밀번호를 확인해주세요");
    } else {
      console.log("그냥 틀렸을걸?");
    }
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
