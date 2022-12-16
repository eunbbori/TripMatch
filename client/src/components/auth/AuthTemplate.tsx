import React from "react";
import styled from "styled-components";

// 회원가입 / 로그인 페이지에서의 회색 배경의 흰색 박스 레이아웃 컴포넌트

// 화면 전체 배경색 채우기
const AuthTemplateBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

// form 입력할 흰색 박스
const PinkBox = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.lightpink};
  border-radius: 0.5rem;
  max-width: 40rem;
  min-width: 25em;
  .title {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
`;

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <PinkBox>
        <div className="title">TripMatch</div>
        {children}
      </PinkBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
