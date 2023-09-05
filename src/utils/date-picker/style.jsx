import styled from "styled-components";

export const StyledWrapDatePicker = styled.div`
  button {
    cursor: pointer;
  }

  & .container {
    display: flex;

    & .react-datepicker-popper {
        z-index: 2;
    }

    & .custom-input {
        height: 33px;
    }
  }
`;
