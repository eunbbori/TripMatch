import React from "react";
import styled from "styled-components";
import Modal from "./../../../styles/Modal";

interface ThumbnailModalProps {
  onToggleThumbnail: () => void;
  imgUrl: string;
}

const ThumbnailModal: React.FC<ThumbnailModalProps> = ({
  onToggleThumbnail,
  imgUrl,
}) => {
  return (
    <Modal onClick={() => onToggleThumbnail && onToggleThumbnail()}>
      <Thumbnail src={imgUrl} onClick={(e) => e.stopPropagation()} />
    </Modal>
  );
};

export default ThumbnailModal;

const Thumbnail = styled.img`
  max-width: 600px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
