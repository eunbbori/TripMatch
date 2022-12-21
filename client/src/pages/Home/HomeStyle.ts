import styled from "styled-components";
import Modal from "../../styles/Modal";

const Title = styled.div`
  width: 60vw;
  margin: 50px auto 0 auto;

  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: default;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalCard = styled(Modal)`
  .modalCard {
    height: 25vh;
  }

  .userInfo {
    width: 210px;
    margin: 2% 0 5% 0; 
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 0.8fr 1.7fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "img nickname"
      "img detailInfo";

    img {
      grid-area: img;
      width: 3.5vw;
      height: 3.5vw;
      object-fit: cover;
      border-radius: 100%;
    }
  
    .nickname {
      grid-area: nickname;
      font-weight: bold;
      line-height: 2rem;
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
}
`;

export { Title, ModalCard };
