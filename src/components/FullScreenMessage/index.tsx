import React from "react";
import { MessageContainer, MessageBox } from "./styles";

interface Props {
  message: string;
  isError?: boolean;
}

const FullScreenMessage: React.FC<Props> = ({ message, isError }) => (
  <MessageContainer>
    <MessageBox isError={isError}>{message}</MessageBox>
  </MessageContainer>
);

export default FullScreenMessage;
