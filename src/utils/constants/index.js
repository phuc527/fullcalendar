export const VIEW_MAPS = {
    Day: "timeGridDay",
    Week: "timeGridWeek",
    "2 Weeks": "twoWeeks",
    "3 Weeks": "threeWeeks",
    "4 Weeks": "fourWeeks",
    Month: "dayGridMonth",
    "3 Days Rolling": "threeDays",
    "4 Days Rolling": "fourDays",
  };

export const VIEW_DATE_MAPPINGS = {
  timeGridWeek: { startOf: "week", endOf: "week" },
  timeGridDay: { startOf: "day", endOf: "day" },
  dayGridMonth: { startOf: "month", endOf: "month" },
  twoWeeks: { subtractDays: 3, addDays: 10, startOf: "week", endOf: "week" },
  threeWeeks: { subtractDays: 10, addDays: 17, startOf: "week", endOf: "week" },
  fourWeeks: { subtractDays: 17, addDays: 24, startOf: "week", endOf: "week" },
  threeDays: { addDays: 2, startOf: "day", endOf: "day" },
  fourDays: { addDays: 3, startOf: "day", endOf: "day" },
  default: { startOf: "week", endOf: "week" },
};