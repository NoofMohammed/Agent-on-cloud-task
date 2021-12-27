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
  const login = () => {
    console.log("yyyysssssssssssssssssssssssssssss");
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
        userType: userType,
      })
      .then((result) => {
        console.log(result, "seeler");
        console.log(result.data.user.id, "result.user.id");
        navigate(`/allRequest/${result.data.user.id}`);
        if (userType === "seller") {
          // console.log(result.data.user.id, "result.user.id");
          // navigate(`/allRequest/${result.data.user.id}`);
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
            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
