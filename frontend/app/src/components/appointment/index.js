// import React, { useState } from "react";
// // import { Input, Format } from "react-bootstrap";

// import DatePicker from "react-datepicker";
// import moment from "moment";
// import "react-datepicker/dist/react-datepicker.css";

// const Booking = () => {
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
//       //   selected={Input.value ? moment(Input.value, "America/New_York") : null}
//       todayButton="Today"
//       showTimeSelect
//       timeFormat="HH:mm"
//       timeIntervals={15}
//       //   dateFormat={Format}
//     />
//   );
// };
import React, { useState } from "react";
// import "./styles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    console.log(date);
  };

  const today = new Date();
  let in3Days = new Date();
  in3Days.setDate(in3Days.getDate() + 3);

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      minDate={today}
      //   maxDate={in3Days}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default Booking;
