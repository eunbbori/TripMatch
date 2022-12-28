import styled from "styled-components";
import FreePostForm from "./components/FreePostForm";

const FreePostWrite = () => {
  // const postData = {
  //   region: "전라도",
  //   category: "숙소",
  //   title: "순천 숙소 추천해주세요",
  //   content: "내용",
  // };

  return (
    <Container>
      <Title>게시글 쓰기</Title>
      <FreePostForm />
    </Container>
  );
};

export default FreePostWrite;

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 20px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;
