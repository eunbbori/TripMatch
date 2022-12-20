import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 15px auto;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MatchPosList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 23%;
    margin: 1% 1%;
    position: relative;

    .heart {
      width: 10%;
      position: absolute;
      top: 8%;
      left: 80%;
      cursor: pointer;
    }

    .region {
      position: absolute;
      top: 7%;
      left: 8%;
      background-color: white;
      padding: 2px 2px;
      opacity: 0.5;
      border-radius: 10%;
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

export { Container, MatchPosList };
