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
import ChartList from "../../components/chart-list";

// Data
import { EVENT_LIST, SIDEBAR_LIST, customViews } from "../../utils/data/event";
import { VIEW_MAPS } from "../../utils/constants";

// Style
import { StyledFullCalendar } from "./style";


const index = () => {
  const [listEvent, setListEvent] = useState(EVENT_LIST);
  const [listSidebar, setListSidebar] = useState(SIDEBAR_LIST);
  const calendarRef = useRef();
  const [titleCalendar, setTitleCalendar] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const containerEl = document.getElementById("list-sidebar");
    const draggable = new Draggable(containerEl, {
      itemSelector: ".item",
      eventData: function (eventEl) {
        const itemAdd = {
          title: eventEl.innerText,
          id: uuidv4(),
          start: eventEl.getAttribute("data-start"),
          end: eventEl.getAttribute("data-end"),
        };
        return itemAdd;
      },
    });

    return () => {
      draggable.destroy();
    };
  }, []);

  const handleChangeStartAndEndDate = (refChooseDate) => {
    setStartDate(refChooseDate?.start);
    setEndDate(
      refChooseDate?.end &&
        calendarRef.current?.getApi()?.currentData?.currentViewType !==
          "timeGridDay"
        ? refChooseDate.end
        : null
    );
  };

  const changeView = (viewName) => {
    if (calendarRef.current) {
      const refCalendar = calendarRef?.current?.calendar;
      calendarRef.current.getApi().changeView(viewName);
      setTitleCalendar(refCalendar?.currentData?.viewTitle);

      handleChangeStartAndEndDate(
        refCalendar?.currentData?.dateProfile.activeRange
      );
    }
  };

  const onChangeDropdown = (value) => {
    if (VIEW_MAPS[value]) {
      changeView(VIEW_MAPS[value]);
    }
  };

  const onChangeDatePicker = (value) => {
    const calendarApi = calendarRef?.current.getApi();

    switch (value) {
      case "prev":
        calendarApi?.prev();
        break;
      case "next":
        calendarApi?.next();
        break;
      case "today":
        calendarApi?.today();
        break;
      default:
        break;
    }
    handleChangeStartAndEndDate(
      refCalendar?.currentData?.dateProfile.activeRange
    );
    setTitleCalendar(calendarApi?.calendar?.currentData?.viewTitle);
  };

  const onDropCalendar = (ele) => {
    const id = String(ele.draggedEl.getAttribute("itemid"));
    setListSidebar(listSidebar.filter((lstSide) => String(lstSide.id) !== id));

    const removedItem = listSidebar.find(
      (lstSide) => String(lstSide.id) === id
    );
    setListEvent([...listEvent, {
      ...removedItem,
      start: ele.date.toISOString(),
      end: null
    }]);
  };

  const handleEventDragStop = (eventInfo) => {
    const eventData = eventInfo.event._instance;
    const publicId = eventData.publicId;
    setListEvent(listEvent.filter(evt => String(evt.id) === String(publicId) ? {
      ...evt,
      start: eventData.range.start.toISOString(),
      end: eventData.range.end.toISOString()
    } : evt))
  };

  const handleEventResize = (eventInfo) => {
    const { event } = eventInfo;
    const updatedEvent = listEvent.find(
      (item) => String(item.id) === String(event.id)
    );
    setListEvent(listEvent.filter(evt => String(evt.id) === String(updatedEvent) ? {
      ...evt,
      start: event.start.toISOString(),
      end: event.end.toISOString()
    } : evt))
  };

  return (
    <StyledFullCalendar>
      <CalendarHeader
        onChangeDropdown={onChangeDropdown}
        onChangeDatePicker={onChangeDatePicker}
        calendarRef={calendarRef}
        titleCalendar={titleCalendar}
        setTitleCalendar={setTitleCalendar}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
      />
      <ChartList />
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
          eventDragStop={handleEventDragStop}
          eventResize={handleEventResize}
        />
      </div>
    </StyledFullCalendar>
  );
};

export default index;