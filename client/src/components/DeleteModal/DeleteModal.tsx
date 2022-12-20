import React from "react";
import Modal from "./../../styles/Modal";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { closeModal } from "../../slice/deleteModal";
import { removeFreePost } from "../../slice/freePost";

interface DeleteModalProps {
  onDelete?: any;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDelete }) => {
  const dispatch = useAppDispatch();
  const elementName = useAppSelector((state) => state.modal.element);

  const onCancle = () => dispatch(closeModal());

  // const onDelete = () => dispatch(removeFreePost());

  return (
    <ModalCard>
      <div className="modalCard">
        <ModalTitle>{elementName} 삭제</ModalTitle>
        <p>이 {elementName}을 삭제하시겠습니까?</p>
        <ButtonContainer>
          <button onClick={onCancle}>취소</button>
          <button>삭제</button>
        </ButtonContainer>
      </div>
    </ModalCard>
  );
};

export default DeleteModal;

const ModalCard = styled(Modal)`
  .modalCard {
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

    &:nth-child(2) {
      background-color: ${(props) => props.theme.color.pink};
    }

    + button {
      margin-left: 20px;
    }
  }
`;
