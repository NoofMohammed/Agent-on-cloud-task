import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Booking = () => {
  const { sellerId } = useParams();
  const userId = localStorage.getItem("userId");

  const [date, setDate] = useState(new Date());
  const [state, setState] = useState("");
  const [booking, setBooking] = useState("");
  const handleChange = (date) => {
    console.log(date);
    setDate(date);
  };

  const today = new Date();
  const book = () => {
    axios
      .post("http://localhost:5000/appointment", {
        timeStamp: date,
        state,
        buyer_id: userId,
        sellerId: sellerId,
      })
      .then((result) => {
        setState("pending");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <DatePicker
        selected={date}
        onChange={handleChange}
        minDate={today}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <Button variant="primary" className="book" onClick={book}>
        book
      </Button>
      {/* <div>Appointment awaiting seller's response</div> */}
    </>
  );
};

export default Booking;
