import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 50px auto;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    cursor: default;
    font-size: ${(props) => props.theme.font.L};
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .showAll {
    margin-top: 2%;
    text-align: right;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  min-height: 40px;
  height: 4vh;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border: 1px solid #b1b1b1;
  border-radius: 100px;

  input {
    border: none;
    font-family: "S-CoreDream-3Light";

    :focus {
      outline: white;
    }
  }

  img {
    height: 65%;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const MemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 60vh;
  overflow: auto;

  .member {
    display: flex;
    align-items: center;
    width: 45%;
    margin-top: 10px;
    padding: 15px 2%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.lightpink};
    line-height: 20px;

    .name {
      width: 50%;

      .nickname {
        font-weight: bold;
        margin-top: 3px;
      }

      .email {
        margin-top: 10px;
      }
    }

    .joinDate {
      width: 33%;
      color: #b1b1b1;
    }
  }
`;

const Management = styled.div`
  width: 17%;

  select:focus {
    border: 1px solid #dbdbdb;
  }

  button {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.pink};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.blue};
    }
  }
`;

export { Container, SearchBar, MemberList, Management };
