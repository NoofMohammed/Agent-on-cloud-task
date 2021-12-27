import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./registerSeller.css";
import { useParams, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { userType } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [goods_type, setGoods_type] = useState("");
  const [img, setImg] = useState("");

  const newUser = () => {
    console.log(userType, "userType");

    console.log("dddd");
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      location &&
      goods_type &&
      img
    ) {
      axios
        .post("http://localhost:5000/seller", {
          firstName,
          lastName,
          email,
          password,
          location,
          goods_type,
          img,
        })
        .then((result) => {
          console.log(result.data, "seeler");
          navigate(`/login/${userType}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {userType === "seller" ? (
          <div className="forms">
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Goods type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter goods type"
                onChange={(e) => {
                  setGoods_type(e.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image"
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
        ) : null}

        <Button variant="primary" onClick={newUser}>
          Register
        </Button>
      </Form>
    </div>
  );
};
export default Register;
