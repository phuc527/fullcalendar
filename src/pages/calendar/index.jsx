import React, { useRef, useState } from "react";

// Library
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";

// Components
import CalendarHeader from "../../components/calendar-header";

// Data
import { EVENT_LIST, customViews } from "../../utils/data/event";

import { StyledFullCalendar } from "./style";

const index = () => {
  const [listEvent] = useState(EVENT_LIST);
  const calendarRef = useRef();

  const changeView = (viewName) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(viewName);
    }
  };

  const onChangeDropdown = (value) => {
    switch (value) {
      case "Day":
        changeView("timeGridDay")
        break;
      case "Week":
        changeView("timeGridWeek")
        break;
      case "2 Weeks":
        changeView("twoWeeks")
        break;
      case "3 Weeks":
        changeView("threeWeeks")
        break;
      case "4 Weeks":
        changeView("fourWeeks")
        break;
      case "Month":
        changeView("dayGridMonth")
        break;
      case "3 Days Rolling":
        changeView("threeDays")
        break;
      case "4 Days Rolling":
        changeView("fourDays")
        break;
      default:
        break;
    }
  };

  const onChangeDatePicker = (value) => {
    switch(value) {
      case "prev":
        calendarRef?.current.getApi().prev();
        break;
      case "next":
        calendarRef?.current.getApi().next();
        break;
      case "today":
        calendarRef?.current.getApi().today();
        break;
      default:
        break;
    }
  };
  return (
    <StyledFullCalendar>
      <CalendarHeader
        onChangeDropdown={onChangeDropdown}
        onChangeDatePicker={onChangeDatePicker}
        calendarRef={calendarRef}
      />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar=""
        initialView="timeGridWeek"
        events={listEvent}
        dayMaxEvents={4}
        editable={true}
        views={customViews}
      />
    </StyledFullCalendar>
  );
};

export default index;
