import React from "react";
import ModalStyle from "../../styles/Modal";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModal } from "../../slice/modal";

interface ModalProps {
  callBackFn?: any;
}

const Modal: React.FC<ModalProps> = ({ callBackFn }) => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.modal.modalText);

  const onCancle = () => dispatch(closeModal());

  const onExcute = () => {
    callBackFn();
    dispatch(closeModal());
  };

  return (
    <ModalCard>
      <div className="modalCard">
        <ModalTitle>{text && text.title}</ModalTitle>
        <p>{text && text.content}</p>
        <ButtonContainer>
          <button onClick={onCancle}>{text?.leftButton || "취소"}</button>
          <button onClick={onExcute}>{text && text.rightButton}</button>
        </ButtonContainer>
      </div>
    </ModalCard>
  );
};

export default Modal;

const ModalCard = styled(ModalStyle)`
  .modalCard {
    width: 400px;
    justify-content: space-between;
  }
`;

const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
  align-self: start;
  padding: 10px 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 50px;

  button {
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: "S-CoreDream-3Light";

    &:nth-child(2) {
      background-color: ${(props) => props.theme.color.pink};
    }

    + button {
      margin-left: 20px;
    }
  }
`;
