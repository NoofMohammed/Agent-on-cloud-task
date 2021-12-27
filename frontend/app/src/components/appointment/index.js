import React, { useState } from "react";
import { Input, Format } from "react-bootstrap";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  //   const [date, setDate] = useState("");
  //   console.log("booking");
  //   //   const handleChange = (date) => setDate(date);
  //   const now = moment();
  //   return (
  //     <DatePicker
  //       isClearable
  //       minDate={now}
  //       minTime={now.hours(now.hour()).minutes(now.minutes())}
  //       maxTime={now.hours(23).minutes(45)}
  //       //   onChange={handleChange}
  //       placeholderText="Click to select a date"
  //       selected={Input.value ? moment(Input.value, "America/New_York") : null}
  //       todayButton="Today"
  //       showTimeSelect
  //       timeFormat="HH:mm"
  //       timeIntervals={15}
  //       //   dateFormat={Format}
  //     />
  //   );
};
export default Booking;
