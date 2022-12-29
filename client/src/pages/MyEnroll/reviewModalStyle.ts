import styled from "styled-components";
import Modal from "../../styles/Modal";

const ModalCard = styled(Modal)`
  .modalCard {
    height: 25vh;
  }

  .userInfo {
    width: 210px;
    margin: 2% 0 5% 0;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 70px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "img nickname"
      "img detailInfo";

    img {
      grid-area: img;
      width: 4.5vw;
      height: 4.5vw;
      object-fit: cover;
      border-radius: 100%;
      margin-left: 40px;
      box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.11);
    }

    .nickname {
      grid-area: nickname;
      font-weight: bold;
      line-height: 2rem;
      font-size: ${(props) => props.theme.font.M};
    }

    .detailInfo {
      grid-area: detailInfo;
      line-height: 1.5rem;
    }
  }

  .guide {
    margin-top: 5%;
    color: #b1b1b1;
    font-size: 0.8rem;
  }

  ul {
    width: 60%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 2px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .btn {
    margin-top: 5%;

    button {
      margin: 0 10px;
      padding: 5px 7px;
      background-color: ${(props) => props.theme.color.lightpink};
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.color.lightblue};
      }
    }
  }
`;

export default ModalCard;
