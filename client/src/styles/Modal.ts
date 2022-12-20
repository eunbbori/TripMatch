import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modalCard {
    width: 18vw; 
    height: 20vh; 
    margin: auto;
    padding: 2vh 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: white;
    }
  }
`;

export default Modal;
