import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="img_welcome">
        <img src="welcome.jpg" alt="welcome" />
      </div>
      <div className="container">
        <div className="image">
          <Link to="/login/seller" className="seller">
            <img src="seller.jpg" alt="seller" />
          </Link>
          <Link to="/login/buyer">
            <img src="buyer.jpg" alt="buyer" className="buyer" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
