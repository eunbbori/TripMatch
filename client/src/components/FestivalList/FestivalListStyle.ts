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

const FestivalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 21%;
    margin: 1% 1%;
    padding: 1% 1%;
    position: relative;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightpink}
    );

    img {
      width: 100%;
      height: 13vw;
      object-fit: cover;
      // object-position: center top;
    }

    .itemTitle {
      height: 40px;
      line-height: 20px;
      margin-top: 10px;
    }

    .itemDate {
      margin-top: 5px;
      color: #b1b1b1;
    }
  }
`;

export { Container, FestivalInfo };
