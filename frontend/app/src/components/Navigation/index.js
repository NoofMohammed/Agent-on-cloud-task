import React from "react";
import { Link, Router } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">SignUp</Link>
      </div>
    </>
  );
};

export default Navigation;
