import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 15px auto 70px auto;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const FreePostList = styled.div`
  margin-top: 2%;
  .item {
    display: flex;
    align-items: center;
    height: 5vh;
    margin: 1% 1% 5px 1%;
    padding: 0 2%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: solid 3.5px ${(props) => props.theme.color.pink};
    background-color: ${(props) => props.theme.color.lightpink};

    .region,
    .category {
      font-weight: bold;
      margin-right: 1%;
    }

    .itemTitle {
      flex-grow: 1;
    }

    .createDate {
      width: 13%;
      text-align: end;
    }
  }
`;

export { Container, FreePostList };
