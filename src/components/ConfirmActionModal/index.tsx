import React from "react";
import { Primary, Secondary } from "components/Button";
import {
  ModalBackground,
  ModalContainer,
  ModalMessage,
  ButtonGroup,
} from "./styles";

interface Props {
  message: string;
  onConfirm: () => void;
  onToggle: () => void;
}

const ConfirmActionModal: React.FC<Props> = ({
  message,
  onConfirm,
  onToggle,
}) => (
  <ModalBackground>
    <ModalContainer>
      <ModalMessage>{message}</ModalMessage>
      <ButtonGroup>
        <Secondary onClick={onToggle}>Abort</Secondary>
        <Primary onClick={onConfirm}>Confirm</Primary>
      </ButtonGroup>
    </ModalContainer>
  </ModalBackground>
);

export default ConfirmActionModal;
