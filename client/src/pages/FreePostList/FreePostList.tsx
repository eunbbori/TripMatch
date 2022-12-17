import React from "react";
import styled from "styled-components";
import AppTabs from "../../components/AppTabs/AppTabs";

const FreePostList = () => {
  const regions = [
    "전체",
    "서울",
    "경기도",
    "강원도",
    "충청도",
    "경상도",
    "전라도",
    "제주도",
    "기타",
  ];

  return (
    <Container>
      <AppTabs tabs={regions} />
    </Container>
  );
};

export default FreePostList;

const Container = styled.div`
  padding: 50px 100px;
`;
