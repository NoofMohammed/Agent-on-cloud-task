import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const seller = () => {
    navigate("/loginSeller");

    // navigate("/registerSeller");
  };

  const buyer = () => {
    navigate("/loginBuyer");
  };

  return (
    <>
      <div>
        <img src="welcome.jpg" alt="welcome" />
      </div>
      <div className="image">
        <Link to="/login/seller">
          <img
            src="seller.jpg"
            style={{ width: "17%" }}
            onClick={seller}
            alt="seller"
          />
        </Link>
        <Link to="/login/buyer">
          <img
            src="buyer.jpg"
            style={{ width: "17%" }}
            onClick={buyer}
            alt="buyer"
          />
        </Link>
      </div>
    </>
  );
};
export default Home;
