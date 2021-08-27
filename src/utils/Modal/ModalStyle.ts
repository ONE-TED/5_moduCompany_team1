import styled from 'styled-components';
import { ReactComponent as closeButton } from 'Assets/icons/closeButton.svg';

const ModalLayout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 50;
  right: 50;
  z-index: 99;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  width: 18%;
  height: 200px;
`;

const CloseButton = styled(closeButton)`
  align-self: flex-end;
  cursor: pointer;
  margin: 1.5rem;
`;

const CloseWarningMessage = styled.p`
  align-self: center;
  font-size: 1rem;
`;

const ButtonLayer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  height: 30%;
  width: 60%;

  & > button {
    margin: 0.7rem;
    width: 40%;
    color: white;
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background: #e0e0e0;
  border-radius: 4px;
`;

const ConfirmButton = styled.button`
  background: #5491ed;
  border-radius: 4px;
`;

export const style = {
  ModalLayout,
  ModalBlock,
  CloseButton,
  CloseWarningMessage,
  ButtonLayer,
  CancelButton,
  ConfirmButton,
};
