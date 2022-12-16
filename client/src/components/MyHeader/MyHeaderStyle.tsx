import styled from "styled-components";

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
    font-size: 30px;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      min-height: 80px;
      height: 8vh;
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
      border: none;
    }

    img {
      height: 65%;
      margin-left: 10px;
    }
  }

  .navBar img {
    min-height: 40px;
    height: 4vh;
    margin-right: 20px;
  }
`;

export default Header;
