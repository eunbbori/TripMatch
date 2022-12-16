import React from "react";
import { Link } from "react-router-dom";
import { AuthFormBlock, Footer, StyledInput, SummitBtn } from "./AuthStyle";

const LoginForm = () => {
  return (
    <AuthFormBlock>
      <form>
        <div>
          <label htmlFor="idInput">email</label>
          <StyledInput
            id="idInput"
            autoComplete="on"
            name="userEmail"
            placeholder="이메일"
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
          />

          <SummitBtn className="formSubmit">로그인</SummitBtn>
        </div>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default LoginForm;
