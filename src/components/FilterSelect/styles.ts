import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const FilterContainer = styled.div<{
  customCss?: string | FlattenSimpleInterpolation;
}>`
  position: relative;

  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}
`;

export const FilterStatus = styled.div`
  border: 1px solid white;
  min-width: 140px;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  text-align: right;

  &:hover {
    border-color: cyan;
    color: cyan;
  }
`;

export const FilterDropdown = styled.div<{ isVisible: boolean }>`
  border: 1px solid white;
  display: flex;
  flex-flow: column nowrap;
  padding: 8px;
  visibility: hidden;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 140px;
  background-color: black;
  z-index: 100;

  ${({ isVisible }) =>
    isVisible &&
    css`
      visibility: visible;
    `}
`;

export const FilterOption = styled.div`
  cursor: pointer;
  text-align: right;
  &:hover {
    color: cyan;
  }
`;
