import { styled } from "styled-components";

export const StyledListSidebar = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 15px;

  & .item {
    background-color: rgb(246, 112, 175);
    border-left: 4px solid rgb(230, 196, 11);
    cursor: pointer !important;
    font-size: 12px;
    line-height: 18px;
    padding: 8px !important;
    margin-right: 10px;
    min-width: 65px;
  }
`;
