import React, { useState, useRef, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  position: relative;
`;

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handelTouchStart = useCallback((e) => e.stopPropagation(), []);

  const hadleCalendarOpen = () => {
    console.log("open");
    document.addEventListener("touchstart", handelTouchStart, true);
  };

  const hadleCalendarClose = () => {
    console.log("close");
    document.removeEventListener("touchstart", handelTouchStart, true);
  };

  return (
    <CalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        onCalendarOpen={hadleCalendarOpen}
        onCalendarClose={hadleCalendarClose}
        withPortal
      />
    </CalendarWrapper>
  );
};

export default Calendar;
