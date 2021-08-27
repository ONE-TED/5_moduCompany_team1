import React from 'react';
import { style } from './ModalStyle';

const Modal = () => {
  return (
    <ModalLayout>
      <ModalBlock>
        <CloseButton />
        <CloseWarningMessage>정말 삭제하시겠습니까?</CloseWarningMessage>
        <ButtonLayer>
          <CancelButton>취소</CancelButton>
          <ConfirmButton>확인</ConfirmButton>
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
