import styled from "styled-components";
import Theme from "./../../styles/Theme";

export const Modal = styled.div`
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .content {
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1.5rem 1.5rem;
    border-radius: 1rem;
    width: 25rem;
  }

  .close {
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .profileImg {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    border: 0.2rem solid ${Theme.color.blue};
  }

  .infoContainer {
    width: 100%;
    display: inline-block;
  }

  .nicknameEmailWrapper {
    display: inline-block;
    margin-bottom: 1rem;

    .nickname {
      font-size: ${Theme.font.L};
      font-weight: 600;
      margin-right: 1.5rem;
    }
    .email {
      font-size: ${Theme.font.M};
      font-weight: 600;
    }
  }

  .etcWrapper {
  }

  .genderAge {
    margin-bottom: 0.5rem;
    .etc {
      margin-right: 2rem;
    }
  }

  .matches {
    display: flex;
    justify-content: space-between;
  }
  .etc {
    font-size: ${Theme.font.S};
    color: gray;
  }

  .introTextArea {
    box-sizing: border-box;
    border: none;
    font-size: ${Theme.font.M};
    padding: 2rem;
    width: 100%;
    margin: auto;
    font-size: 1.2rem;
    background-color: #cfcfcf;
    border-radius: 0.5rem;
    resize: none;
    height: 10rem;

    &:focus {
      outline: none;
    }
  }
`;
