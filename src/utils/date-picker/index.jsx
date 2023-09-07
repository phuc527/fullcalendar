// Library
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import DatePicker from "react-datepicker";
import moment from "moment";

// Style
import { StyledWrapDatePicker } from "./style";
import "react-datepicker/dist/react-datepicker.css";
import { VIEW_DATE_MAPPINGS } from "../constants";

const index = ({
  onChangeDatePicker,
  calendarRef,
  titleCalendar,
  setTitleCalendar,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
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

    const dateMapping =
      VIEW_DATE_MAPPINGS[viewType] || VIEW_DATE_MAPPINGS.default;

    const newStartDate = currentDate
      .clone()
      .subtract(dateMapping.subtractDays || 0, "days")
      .startOf(dateMapping.startOf || "week");

    const newEndDate = currentDate
      .clone()
      .add(dateMapping.addDays || 0, "days")
      .endOf(dateMapping.endOf || "week");

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
          startDate={startDate || moment().startOf("week").toDate()}
          endDate={!endDate && !startDate && moment().endOf("week").toDate()}
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
