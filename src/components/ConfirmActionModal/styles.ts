import styled from "styled-components";

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  padding: 16px;
  border: 1px solid white;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const ModalMessage = styled.div`
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
