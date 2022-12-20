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
      border: none;

      :focus {
        outline: white;
      }
    }

    img {
      height: 65%;
      margin-left: 10px;
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
}
`;

export default Header;
