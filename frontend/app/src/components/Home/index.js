import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div>
        <img src="welcome.jpg" alt="welcome" />
      </div>
      <div className="image">
        <Link to="/login/seller">
          <img src="seller.jpg" style={{ width: "17%" }} alt="seller" />
        </Link>
        <Link to="/login/buyer">
          <img src="buyer.jpg" style={{ width: "17%" }} alt="buyer" />
        </Link>
      </div>
    </>
  );
};
export default Home;
