import styled from "styled-components";
import DatePicker from "react-date-picker";

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;

  h1 {
    font-size: 1.5rem;
    margin: 16px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
  }
`;

export const FormInput = styled.input`
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 16px;
  margin-bottom: 16px;
`;

export const CustomDatePicker = styled(DatePicker)`
  background-color: black;
  color: white;

  .react-date-picker__wrapper {
    padding: 8px;
    border: 1px solid white;
  }

  * {
    background-color: black;
    color: white;

    svg {
      filter: invert(100%);
      background: none;
    }
  }
`;

export const SubmitButton = styled.div`
  border: 1px solid cyan;
  padding: 16px;
  margin-top: 32px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    color: red;
  }

  b {
    color: cyan;
  }
`;
