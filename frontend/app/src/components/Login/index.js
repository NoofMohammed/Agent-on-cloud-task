import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";
import { useNavigate, Link, useParams } from "react-router-dom";

const Login = () => {
  const { userType } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ userType });
  const login = () => {
    axios
      .post(`http://localhost:5000/login`, {
        email,
        password,
        userType: userType,
      })
      .then((result) => {
        const { data } = result;
        console.log(data, "seeler");
        console.log(data.userId, "user.id");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        if (userType === "seller") {
          console.log("llll");
          navigate(`/myRequest/${data.userId}`);
        }
        if (userType === "buyer") {
          navigate("/allSeller");
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login_form">
      <div className="login">
        <Form>
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

          <Form.Group className="mb-3">
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
            <Link to={`/register/${userType}`}>
              <Button variant="primary" className="register">
                Register
              </Button>
            </Link>
            <Button variant="primary" className="login" onClick={login}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
