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

export default Container;
