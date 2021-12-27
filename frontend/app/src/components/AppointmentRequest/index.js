import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import "./style.css";
//appointment requests that show to seller
const AppointmentRequest = () => {
  const { seller_id } = useParams();

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/appointment/booking/${seller_id}`)
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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
        </Table>
        {appointments.map((appointment) => {
          console.log(appointment, "llllllllllllllllllll");
          return (
            <div className="container">
              <div className="table">
                <Table striped bordered hover>
                  <tbody key={appointment.id}>
                    <tr>
                      <td>{appointment.id}</td>
                      <td>
                        {appointment.firstName} {appointment.lastName}
                      </td>
                      <td>{appointment.email}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.date}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* <div className="but_table"> */}
              <Button variant="primary" className="but_table">
                Accept{" "}
              </Button>
              <Button variant="primary" className="but_table">
                Reject{" "}
              </Button>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AppointmentRequest;
