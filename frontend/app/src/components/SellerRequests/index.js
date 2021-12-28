import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import "./style.css";
//appointment requests that show to seller
const SellerRequests = () => {
  const { sellerId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const getAllAppointments = () => {
    axios
      .get(`http://localhost:5000/appointment/seller/${sellerId}`, { headers })
      .then((result) => {
        const nonReject = result.data.filter(
          (appointment) => appointment.state !== "reject"
        );
        setAppointments(nonReject);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllAppointments();
  }, []);

  const updateState = (state, appointmentId) => {
    axios
      .put(
        `http://localhost:5000/appointment/seller/${appointmentId}`,
        {
          state,
        },
        { headers }
      )
      .then((result) => {
        getAllAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="appointments">
        {appointments.map((appointment) => {
          return (
            <Card style={{ width: "18rem" }} key={appointment.id}>
              <Card.Body>
                <Card.Title>
                  {appointment.first_name} {appointment.last_name}
                </Card.Title>
                <Card.Text>{appointment.state}</Card.Text>
                <Card.Text>
                  {new Date(appointment.date).toLocaleString()}
                </Card.Text>
                <div className="response">
                  {appointment.state !== "accept" ? (
                    <Button
                      variant="primary"
                      className="accept"
                      onClick={() => updateState("accept", appointment.id)}
                    >
                      Accept
                    </Button>
                  ) : null}

                  <Button
                    variant="primary"
                    className="reject"
                    onClick={() => updateState("reject", appointment.id)}
                  >
                    Reject
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default SellerRequests;
