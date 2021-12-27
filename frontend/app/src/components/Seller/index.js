import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "./seller.css";
import { useNavigate } from "react-router-dom";

const ShowSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [goods_type, setGoods_type] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/seller")
      .then((result) => {
        setFirstName(result.data[0].firstName);
        setSellers(result.data);
        setLastName(result.data.lastName);
        setEmail(result.data.email);
        setPassword(result.data.password);
        setLocation(result.data.location);
        setGoods_type(result.data.goods_type);
        setImg(result.data.img);
        console.log(result.data, "seeeeleeer");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="cards">
        {sellers.map((seller) => {
          console.log(seller, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
          return (
            <Card style={{ width: "18rem" }} key={seller.id}>
              <Card.Img variant="top" src={seller.img} />
              <Card.Body>
                <Card.Title>
                  Name: {seller.firstName} {seller.lastName}
                </Card.Title>
                <Card.Text>Shop name: {seller.goods_type}</Card.Text>
                <Card.Text>Email: {seller.email}</Card.Text>
                <Card.Text>Location: {seller.location}</Card.Text>
                <Button variant="primary">Go booking</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default ShowSellers;
