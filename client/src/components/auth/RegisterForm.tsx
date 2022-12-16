import React from "react";
import { Link } from "react-router-dom";
import {
  AuthFormBlock,
  Footer,
  StyledInput,
  SummitBtn,
  Select,
  ResultText,
  TextArea,
} from "./AuthStyle";

const RegisterForm = () => {
  return (
    <AuthFormBlock>
      <form>
        <label htmlFor="emailInput">email*</label>
        <StyledInput
          id="emailInput"
          autoComplete="on"
          name="userEmail"
          placeholder="이메일 주소를 입력해주세요"
        />
        <ResultText>{"이메일 형식이 올바르지 않습니다"}</ResultText>
        <SummitBtn>인증번호 요청</SummitBtn>

        <label htmlFor="authNumberInput">인증번호*</label>
        <StyledInput
          id="authNumberInput"
          autoComplete="off"
          name="authNumber"
          placeholder="인증번호를 입력해주세요"
        />
        <ResultText>{"인증번호가 일치하지 않습니다"}</ResultText>
        <SummitBtn>인증번호 확인</SummitBtn>

        <label htmlFor="nicknameInput">닉네임*</label>
        <StyledInput
          id="nicknameInput"
          autoComplete="on"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
        />
        <ResultText>{"8글자 이하, 특수문자 제외"}</ResultText>

        <label htmlFor="passwordInput">비밀번호*</label>
        <StyledInput
          id="passwordInput"
          autoComplete="off"
          name="Password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        <ResultText>
          {"8자 이상, 20자이하, 영어,숫자,특수문자 사용 "}
        </ResultText>

        <label htmlFor="passwordConfirmInput">비밀번호 확인*</label>
        <StyledInput
          id="passwordConfirmInput"
          autoComplete="off"
          name="PasswordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
        />
        <ResultText>{"비밀번호가 일치하지 않습니다"}</ResultText>

        <label htmlFor="passwordInput">성별*</label>
        <label className="gender" htmlFor="">
          <input type="radio" name="gender" value="남성" checked />
          남성
        </label>
        <label className="gender" htmlFor="">
          <input type="radio" name="gender" value="여성" />
          여성
        </label>

        <label htmlFor="ageSelect">나이*</label>
        <Select id="ageSelect" className="ageSelect">
          <option selected disabled>
            선택
          </option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대 이상">50대 이상</option>
        </Select>
        <label htmlFor="introduceText">자기소개*</label>
        <TextArea
          name="introduce"
          id="introduceText"
          rows={8}
          placeholder="100자 이내로 소개해주세요"
        ></TextArea>
        <p className="introP">
          SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)
        </p>
        <SummitBtn className="formSubmit">회원가입</SummitBtn>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default RegisterForm;
