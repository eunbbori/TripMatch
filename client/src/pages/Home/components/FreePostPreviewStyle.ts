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
    font-size: ${(props) => props.theme.font.L};

    a {
      font-size: ${(props) => props.theme.font.M};
      align-self: flex-end;
    }
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const FreePostList = styled.div`
  .item {
    display: flex;
    align-items: center;
    height: 5vh;
    margin: 0 1% 5px 1%;
    padding: 0 2%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: solid 3.5px ${(props) => props.theme.color.pink};
    background-color: ${(props) => props.theme.color.lightpink};

    .region,
    .category {
      // font-weight: bold;
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
