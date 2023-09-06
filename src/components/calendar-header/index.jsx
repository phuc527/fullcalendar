import React, { useState } from "react";

// Utils
import Dropdown from "../../utils/dropdown";
import DatePicker from "../../utils/date-picker";

// Style
import { StyledCalendarHeader } from "./style";
import { LIST_OPTIONS } from "../../utils/data/event";

const index = ({
  onChangeDropdown,
  onChangeDatePicker,
  titleCalendar,
  calendarRef,
  setTitleCalendar
}) => {
  const [optionDropdown] = useState("Week");

  return (
    <StyledCalendarHeader>
      <Dropdown
        defaultValue={optionDropdown}
        options={LIST_OPTIONS}
        onChange={onChangeDropdown}
      />
      <DatePicker
        onChangeDatePicker={onChangeDatePicker}
        titleCalendar={titleCalendar}
        calendarRef={calendarRef}
        setTitleCalendar={setTitleCalendar}
      />
      <div></div>
    </StyledCalendarHeader>
  );
};

export default index;
