import styled from "styled-components";
import Modal from "../../styles/Modal";

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
    font-weight: bold;
  }

  a {
    font-size: ${(props) => props.theme.font.M};
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: normal;
  }
`;

const FestivalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 21%;
    margin: 1% 1%;
    padding: 1% 1%;
    position: relative;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightblue},
      ${(props) => props.theme.color.lightpink}
    );
    cursor: pointer;

    img {
      width: 100%;
      height: 13vw;
      object-fit: cover;
      // object-position: center top;
    }

    .itemTitle {
      height: 40px;
      line-height: 20px;
      margin-top: 10px;
    }

    .itemDate {
      margin-top: 5px;
      color: #b1b1b1;
      overflow: hidden;
    }
  }
`;

const ModalCard = styled(Modal)`
  .modalCard {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 30vw;
    height: 30vh;
    position: relative;
    cursor: default;

    .closeModal {
      width: 1vw;
      height: 1vw;
      position: absolute;
      top: 1vw;
      right: 1vw;
      cursor: pointer;
    }

    .festivalImg {
      min-width: 11vw;
      min-height: 11vw;
      max-width: 12vw;
      max-height: 12vw;
      object-fit: contain;
      background-color: ${(props) => props.theme.color.lightblue};
      border-radius: 10px;
    }

    .info {
      height: 12vw;
      margin: 0 1vw 0 1vw;

      > * {
        margin-top: 8px;
      }

      .festivalTitle {
        font-size: ${(props) => props.theme.font.L};
        font-weight: bold;
      }

      .address {
        margin-top: 25%;
      }
    }
  }
`;

export { Container, FestivalInfo, ModalCard };