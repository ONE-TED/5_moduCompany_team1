import React from 'react';
import { style } from './ModalStyle';

interface ModalProps {
  setModalOpen: (state: boolean) => void;
  removeTodo: (id: number) => void;
  removeBtnClickedTodo: number;
}

const Modal = ({
  setModalOpen,
  removeTodo,
  removeBtnClickedTodo,
}: ModalProps) => {
  const handleCancelButtonClick = () => {
    setModalOpen(false);
  };

  const handleConfirmButtonClick = () => {
    setModalOpen(false);
    removeTodo(removeBtnClickedTodo);
  };

  return (
    <ModalLayout>
      <ModalBlock>
        <CloseButton onClick={handleCancelButtonClick} />
        <CloseWarningMessage>정말 삭제하시겠습니까?</CloseWarningMessage>
        <ButtonLayer>
          <CancelButton onClick={handleCancelButtonClick}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirmButtonClick}>확인</ConfirmButton>
        </ButtonLayer>
      </ModalBlock>
    </ModalLayout>
  );
};

export default Modal;

const {
  ModalLayout,
  ModalBlock,
  CloseButton,
  CloseWarningMessage,
  ButtonLayer,
  CancelButton,
  ConfirmButton,
} = style;
