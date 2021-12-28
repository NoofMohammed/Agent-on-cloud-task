import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button, Table } from "react-bootstrap";

import "./style.css";
//appointment requests that show to seller
const AppointmentRequest = () => {
  const { sellerId } = useParams();

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/appointment/booking/${sellerId}`)
      .then((result) => {
        setAppointments(result.data);
        console.log(result, "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {appointments.map((appointment) => {
        console.log(appointment, "llllllllllllllllllll");
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {appointment.firstName} {appointment.lastName}
              </Card.Title>
              <Card.Text>{appointment.email}</Card.Text>
              <Card.Text>{appointment.timeStamp}</Card.Text>
              <div className="response">
                <Button variant="primary" className="accept">
                  Accept
                </Button>
                <Button variant="primary" className="reject">
                  Reject
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
export default AppointmentRequest;
