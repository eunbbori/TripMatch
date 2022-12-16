import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 50px auto;

  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    cursor: default;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MatchPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;

  .item {
    width: 23%;
    margin: 1% 1%;
    position: relative;

    .region {
      position: absolute;
      top: 7%;
      left: 8%;
      background-color: white;
      padding: 2px 2px;
      opacity: 0.5;
      border-radius: 10%;
    }

    .heart {
      width: 10%;
      position: absolute;
      top: 8%;
      left: 80%;
    }

    .itemImg {
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }

    .itemTitle {
      height: 40px;
      line-height: 20px;
    }
  }
`;

export { Container, MatchPost };
