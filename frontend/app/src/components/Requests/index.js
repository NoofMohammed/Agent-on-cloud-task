import React, { useEffect, useState } from "react";
import { Card, FormControl, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

// get all requests buyer

const RequestsBuyer = () => {
  const buyerId = localStorage.getItem("userId");
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/appointment/${buyerId}`, { headers })
      .then((result) => {
        setRequests(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        {requests.map((request) => {
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{requests.id}</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>;
        })}
      </div>
      ;
    </>
  );
};
export default RequestsBuyer;
