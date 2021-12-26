import React, { useEffect } from "react";
import axios from "axios";
import "./home.css";

const Buyer = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/seller")
      .then((result) => {
        console.log(result, "seeler");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return;
};
export default Buyer;
