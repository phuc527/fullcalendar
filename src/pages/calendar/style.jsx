import styled from "styled-components";

export const StyledFullCalendar = styled.div`
  max-width: 99%;
  height: 100%;
  display: block;
  margin: 0 auto;
  background: white;
  border-radius: 8px 8px 0 0;
  line-height: 1;
  position: relative;

  & .fc-timegrid {
    z-index: 1;
  }

  & .fc-event {
    margin: 5px 0;

    &:hover {
      transition: background-color 0.1s linear;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08),
        0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.03),
        0 0 1px 0 rgba(0, 0, 0, 0.16);
    }

    & .fc-event-main {
      color: black;
    }

    &.bg-gray {
      background: rgb(235, 235, 235);
      border-color: rgb(235, 235, 235);

      & .fc-daygrid-event-dot {
        background: rgb(235, 248, 188);
      }
    }

    &.bg-green {
      background: rgb(235, 248, 188);
      border-color: rgb(235, 248, 188);

      & .fc-daygrid-event-dot {
        background: rgb(235, 235, 235);
      }
    }
  }
`;