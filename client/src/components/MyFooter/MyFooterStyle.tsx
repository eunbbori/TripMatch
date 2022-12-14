import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.color.lightblue};
`;

export default Footer;
