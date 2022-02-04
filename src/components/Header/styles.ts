import styled from "styled-components";
const arasakaLogo = require("../../arasaka-logo.png");

export const HeaderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid white;
  padding: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 8px;
  }
`;

export const LogoSection = styled.div`
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoImg = styled.div`
  width: 250px;
  height: 50px;
  background-image: url(${arasakaLogo});
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    filter: brightness(0.5) sepia(1) saturate(10000%);
  }

  @media (max-width: 800px) {
    width: 100px;
    height: 25px;
  }
`;

export const LogoLabel = styled.div`
  font-size: 0.8rem;
  color: cyan;

  @media (max-width: 800px) {
    font-size: 0.4rem;
  }
`;

export const LocationBox = styled.div`
  position: relative;
  border: 1px solid cyan;
  padding: 8px;
  margin: 24px 0 8px 0;
  width: fit-content;

  p {
    color: red;
  }

  small {
    font-size: 0.6rem;
    position: absolute;
    top: -18px;
    left: 0;
  }

  @media (max-width: 800px) {
    transform: scale(0.8);
  }
`;
