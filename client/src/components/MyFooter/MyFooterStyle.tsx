import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  min-height: 10vh;
  position: absolute;
  bottom: 0;
  color: #b1b1b1;
  background-color: #eeeeee;

  .info {
    padding: 20px 10vw;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.6fr 0.4fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "comInfo comInfo"
      "legalInfo snsLogo"
      "copyright snsLogo";

    > div {
      margin-top: 10px;
    }
  }
  .comInfo {
    grid-area: comInfo;
    display: flex;

    div {
      margin-right: 20px;

      span:nth-child(2) {
        margin-left: 10px;
        color: #cdcdcd;
      }
    }
  }

  .legalInfo {
    grid-area: legalInfo;

    span {
      margin-right: 10px;
    }
  }

  .copyright {
    grid-area: copyright;
  }

  .snsLogo {
    grid-area: snsLogo;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
      height: 30px;
      margin-left: 20px;
    }
  }
`;

export default Footer;
