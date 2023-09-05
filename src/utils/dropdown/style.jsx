import styled from "styled-components";

export const StyledWrapDropdown = styled.div`
  position: relative;
  display: inline-block;

  select {
    display: none;
  }

  & .select-box {
    display: flex;
    align-items: center;
    padding: 8px 16px;

    border: 1px solid #ccc;
    border-radius: 4px;

    cursor: pointer;
    max-width: 150px;
  }

  & .dropdown-options {
    min-width: 129px;
    position: absolute;
    top: 102%;

    left: 0;
    right: 0;
    z-index: 10;

    background-color: #fff;
    border: 1px solid #ccc;

    border-radius: 0 0 4px 4px;
    cursor: pointer;
  }

  & .dropdown-option {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      color: #232426;
      background-color: #fff9e6;
    }
  }

  & .dropdown-option.selected {
    color: #232426;
    background-color: #fff5d9;
  }
`;
