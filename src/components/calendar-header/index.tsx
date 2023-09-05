import React, { useEffect, useState } from "react";

// Utils
import Dropdown from "../../utils/dropdown";
import DatePicker from "../../utils/date-picker";

// Style
import { StyledCalendarHeader } from "./style";
import { LIST_OPTIONS } from "../../utils/data/list-options";

const index = ({ calendarRef, onChangeDropdown, onChangeDatePicker }) => {
  const [optionDropdown] = useState("Week");

  return (
    <StyledCalendarHeader>
      <Dropdown
        defaultValue={optionDropdown}
        options={LIST_OPTIONS}
        onChange={onChangeDropdown}
      />
      <DatePicker onChangeDatePicker={onChangeDatePicker} calendarRef={calendarRef} />
      <div></div>
    </StyledCalendarHeader>
  );
};

export default index;
