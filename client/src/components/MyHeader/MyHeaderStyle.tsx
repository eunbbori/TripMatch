import styled from "styled-components";
import Modal from "../../styles/Modal";

const Header = styled.header`
  min-height: 100px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  background-color: white;
  border-bottom: 1px solid darkgray;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;

    a {
      min-height: 80px;
      height: 8vh;
    }

    img {
      height: 100%;
    }
  }

  .searchBar {
    height: 40%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border: 1px solid #b1b1b1;
    border-radius: 100px;

    input {
      width: 10vw;
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
  }

  .navBar img {
    height: 4vh;
    min-height: 40px;
    margin-left: 20px;
  }

  .navBar .firstImg {
    margin-left: 0;
  }
`;

const AlertModal = styled(Modal)`
  .modalCard {
    width: 14vw;
    height: 12vh;

    div {
      margin-top: 10px;
    }
  }

  button {
    margin-top: 10%;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.lightblue};
    cursor: pointer;

    :focus {
      outline: none;
    }

    :hover {
      background-color: ${(props) => props.theme.color.lightpink};
    }
  }
`;

export { Header, AlertModal };
