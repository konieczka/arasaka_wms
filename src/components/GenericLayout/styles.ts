import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  * {
    color: white;
    font-family: Quicksand;
    text-transform: uppercase;
  }
`;