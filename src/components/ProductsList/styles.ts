import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  overflow: hidden;

  h1 {
    font-size: 1.5rem;
    margin: 16px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
  }
`;

export const ProductsListWrapper = styled.div`
  overflow-y: scroll;
  height: 78%;
`;

export const ProductWrapper = styled.div`
  margin: 8px 0;
  padding: 16px;
  border: 1px solid white;
`;

export const ProductMaintainer = styled.div`
  position: relative;
  border: 1px solid white;
  padding: 8px;
  margin: 24px 0 8px 0;
  width: fit-content;

  small {
    position: absolute;
    top: -20px;
    left: 0;
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ProductDescriptionBox = styled.div`
  position: relative;
  border: 1px solid white;
  padding: 8px;
  margin: 24px 0 8px 0;
  width: fit-content;

  small {
    position: absolute;
    top: -20px;
    left: 0;
  }
`;

export const ProductButtonsGroup = styled.div`
  display: flex;
  margin-top: 8px;
`;
