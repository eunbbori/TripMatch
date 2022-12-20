import React from "react";
import styled from "styled-components";

// 회원가입 / 로그인 페이지에서의 회색 배경의 흰색 박스 레이아웃 컴포넌트

// 화면 전체 배경색 채우기
const AuthTemplateBlock = styled.div`
  width: 100%;
  /* 높이는 footer 수정 후에 지울 예정 */
  height: 120rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// form 입력할 흰색 박스
const PinkBox = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.lightpink};
  border-radius: 0.5rem;
  margin-top: 2rem;
  max-width: 40rem;
  min-width: 25em;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
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
