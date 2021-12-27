import React from "react";
import { Link, Router } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Navigation;
