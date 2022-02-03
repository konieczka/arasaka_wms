import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface ButtonProps {
  customCss?: string | FlattenSimpleInterpolation;
}

export const Primary = styled.button<ButtonProps>`
  width: fit-content;
  border: 1px solid cyan;
  background-color: black;
  padding: 16px;
  color: cyan;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: cyan;
    color: black;
  }

  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}

  @media (max-width: 800px) {
    padding: 8px !important;
    font-size: 0.6rem;
  }
`;

export const Secondary = styled.button<ButtonProps>`
  width: fit-content;
  border: 1px solid red;
  background-color: black;
  padding: 16px;
  color: red;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: red;
    color: black;
  }

  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}

  @media (max-width: 800px) {
    padding: 8px !important;
    font-size: 0.6rem;
  }
`;
