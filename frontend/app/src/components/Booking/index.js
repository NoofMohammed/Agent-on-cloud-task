import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//booking appointment by buyer
const Booking = () => {
  const navigate = useNavigate();
  //get sellerId from params
  const { sellerId } = useParams();
  //get data from localStorage
  const userId = localStorage.getItem("userId");

  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };

  const today = new Date();
  const book = () => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "http://localhost:5000/appointment",
        {
          timeStamp: date.toISOString().replace("Z", ""),
          state: "pending",
          buyerId: userId,
          sellerId: sellerId,
        },
        { headers }
      )
      .then((result) => {
        navigate(`/appointment/${userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="booking">
        <DatePicker
          selected={date}
          onChange={handleChange}
          minDate={today}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <Button variant="primary" className="book" onClick={book}>
        book
      </Button>
    </>
  );
};

export default Booking;
