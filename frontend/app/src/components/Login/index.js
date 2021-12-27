import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./loginBuyer.css";
import { useNavigate, Link, useParams } from "react-router-dom";

const Login = () => {
  const { type } = useParams();
  console.log("******************--------------", type);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer");
  const login = () => {
    console.log("444444444444444444444444");
    axios
      .post("http://localhost:5000/login", { email, password, userType: type })
      .then((result) => {
        console.log(result, "seeler");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/allSeller");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <div className="buttons">
          <Link to="/register/:type">
            <Button variant="primary">Register</Button>
          </Link>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Login;
