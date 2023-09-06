import React, { useEffect, useRef, useState } from "react";

// Library
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { v4 as uuidv4 } from "uuid";

// Components
import CalendarHeader from "../../components/calendar-header";
import Sidebar from "../../components/sidebar";

// Data
import { EVENT_LIST, SIDEBAR_LIST, customViews } from "../../utils/data/event";

import { StyledFullCalendar } from "./style";

const index = () => {
  const [listEvent] = useState(EVENT_LIST);
  const [listSidebar, setListSidebar] = useState(SIDEBAR_LIST);
  const calendarRef = useRef();
  const [titleCalendar, setTitleCalendar] = useState("");

  useEffect(() => {
    const containerEl = document.getElementById("list-sidebar");
    const draggable = new Draggable(containerEl, {
      itemSelector: ".item",
      eventData: function (eventEl) {
        const itemAdd = {
          title: eventEl.innerText,
          id: uuidv4(),
        };
        return itemAdd;
      },
    });

    return () => {
      draggable.destroy();
    };
  }, []);

  const changeView = (viewName) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(viewName);
      setTitleCalendar(calendarRef?.current?.calendar?.currentData?.viewTitle);
    }
  };

  const onChangeDropdown = (value) => {
    switch (value) {
      case "Day":
        changeView("timeGridDay");
        break;
      case "Week":
        changeView("timeGridWeek");
        break;
      case "2 Weeks":
        changeView("twoWeeks");
        break;
      case "3 Weeks":
        changeView("threeWeeks");
        break;
      case "4 Weeks":
        changeView("fourWeeks");
        break;
      case "Month":
        changeView("dayGridMonth");
        break;
      case "3 Days Rolling":
        changeView("threeDays");
        break;
      case "4 Days Rolling":
        changeView("fourDays");
        break;
      default:
        break;
    }
  };

  const onChangeDatePicker = (value) => {
    switch (value) {
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
    setTitleCalendar(calendarRef?.current?.calendar?.currentData?.viewTitle);
  };

  const onDropCalendar = (ele) => {
    setListSidebar(
      listSidebar.filter(
        (lstSide) =>
          String(lstSide.id) !== String(ele.draggedEl.getAttribute("itemid"))
      )
    );
  };

  return (
    <StyledFullCalendar>
      <CalendarHeader
        onChangeDropdown={onChangeDropdown}
        onChangeDatePicker={onChangeDatePicker}
        calendarRef={calendarRef}
        titleCalendar={titleCalendar}
        setTitleCalendar={setTitleCalendar}
      />
      <Sidebar listSidebar={listSidebar} />
      <div>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar=""
          initialView="timeGridWeek"
          events={listEvent}
          dayMaxEvents={4}
          editable
          views={customViews}
          droppable
          drop={onDropCalendar}
        />
      </div>
    </StyledFullCalendar>
  );
};

export default index;
