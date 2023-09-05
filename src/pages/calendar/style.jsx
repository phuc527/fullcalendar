import styled from "styled-components";

export const StyledFullCalendar = styled.div`
  max-width: 90%;
  height: 100%;
  display: block;
  margin: 0 auto;
  background: white;
  border-radius: 8px 8px 0 0;
  line-height: 1;
  position: relative;

  & .fc-event {
    margin: 5px 0;

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
