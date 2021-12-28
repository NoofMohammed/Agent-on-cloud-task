const connection = require("../../db/db");
const bcrypt = require("bcrypt");

// register seller function
const registerSeller = async (req, res) => {
  let { firstName, lastName, email, password, location, goods_type, img } =
    req.body;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  const data = [
    firstName,
    lastName,
    email,
    password,
    location,
    goods_type,
    img,
  ];
  console.log(password, "password");
  const query =
    "INSERT INTO seller (firstName, lastName, email, password, location, goods_type,img) VALUES (?,?,?,?,?,?,?);";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }

    console.log("vvf", result);
    res.json(result);
  });
};

// get all seller
const getAllSeller = (req, res) => {
  const { goods } = req.query;
  const query = `SELECT * FROM seller WHERE goods_type LIKE ?`;

  const goodsSearched = goods ? [`%${goods}%`] : [`%`];
  connection.query(query, goodsSearched, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// get seller based on id
const getSellerById = (req, res) => {
  const id = req.params.id;
  console.log(id, "iiidddd");
  const query = `SELECT * FROM seller WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    console.log(result, "result");
    res.json(result);
  });
};

module.exports = {
  getAllSeller,
  registerSeller,
  getSellerById,
};
