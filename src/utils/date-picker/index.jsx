import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import DatePicker from "react-datepicker";
import moment from "moment";

// Style
import { StyledWrapDatePicker } from "./style";
import "react-datepicker/dist/react-datepicker.css";

const index = ({ onChangeDatePicker, calendarRef, titleCalendar, setTitleCalendar}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const defaultWeekRange = () => {
    const currentDate = moment();
    const title =
      currentDate.isBetween(moment().startOf("week"), moment().endOf("week")) &&
      `${currentDate.startOf("week").format("MMM D")} – ${currentDate
        .endOf("week")
        .format("D, YYYY")}`;

    return title || null;
  };

  const onChangDatePicker = (viewType, dates) => {
    const currentDate = moment(dates[0]);
    let newStartDate, newEndDate;
    switch (viewType) {
      case "timeGridWeek":
        newStartDate = currentDate.clone().startOf("week");
        newEndDate = currentDate.clone().endOf("week");
        break;
      case "timeGridDay":
        newStartDate = currentDate.clone().startOf("day");
        newEndDate = currentDate.clone().endOf("day");
        break;
      case "dayGridMonth":
        newStartDate = currentDate.clone().startOf("month");
        newEndDate = currentDate.clone().endOf("month");
        break;
      case "twoWeeks":
        newStartDate = currentDate.clone().subtract(3, "days").startOf("week");
        newEndDate = currentDate.clone().add(10, "days").endOf("week");
        break;
      case "threeWeeks":
        newStartDate = currentDate.clone().subtract(10, "days").startOf("week");
        newEndDate = currentDate.clone().add(17, "days").endOf("week");
        break;
      case "fourWeeks":
        newStartDate = currentDate.clone().subtract(17, "days").startOf("week");
        newEndDate = currentDate.clone().add(24, "days").endOf("week");
        break;
      case "threeDays":
        newStartDate = currentDate.clone().startOf("day");
        newEndDate = currentDate.clone().add(2, "days").endOf("day");
        break;
      case "fourDays":
        newStartDate = currentDate.clone().startOf("day");
        newEndDate = currentDate.clone().add(3, "days").endOf("day");
        break;
      default:
        newStartDate = currentDate.clone().startOf("week");
        newEndDate = currentDate.clone().endOf("week");
        break;
    }
    setStartDate(moment(newStartDate).toDate());
    setEndDate(moment(newEndDate).toDate());
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(viewType);
      calendarRef.current.getApi().gotoDate(newStartDate.toISOString());
      setTitleCalendar(calendarRef?.current?.calendar?.currentData?.viewTitle);
    }
  };

  const handleDatePickerChange = (dates) => {
    if (calendarRef?.current) {
      onChangDatePicker(
        calendarRef?.current?.getApi()?.currentData?.currentViewType,
        dates
      );
    }
  };

  return (
    <StyledWrapDatePicker>
      <div className="container">
        <button onClick={() => onChangeDatePicker("prev")}>
          <ArrowLeft />
        </button>
        <button onClick={() => onChangeDatePicker("today")}>Today</button>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={handleDatePickerChange}
          customInput={
            <button className="custom-input">
              {titleCalendar || defaultWeekRange()}
            </button>
          }
          monthsShown={2}
        />

        <button onClick={() => onChangeDatePicker("next")}>
          <ArrowRight />
        </button>
      </div>
    </StyledWrapDatePicker>
  );
};

export default index;