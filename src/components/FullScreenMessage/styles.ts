import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface MessageBoxProps {
  isError?: boolean;
}

export const MessageBox = styled.div<MessageBoxProps>`
  padding: 16px;
  border: 1px solid white;

  ${({ isError }) => isError && `color: red; border-color: red;`}
`;
