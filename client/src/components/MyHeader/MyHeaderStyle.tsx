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
  }

  .navBar img {
    min-height: 40px;
    height: 4vh;
    margin-right: 20px;
  }
`;

export default Header;
