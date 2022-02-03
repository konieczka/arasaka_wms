import styled, { css } from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterStatus = styled.div`
  border: 1px solid white;
  width: 160px;
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
  width: 160px;
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
