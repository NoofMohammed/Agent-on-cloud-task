const connection = require("../../db/db");
const bcrypt = require("bcrypt");

// register seller function
const registerSeller = async (req, res) => {
  let { firstName, lastName, email, password, location, goods_type } = req.body;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  const data = [firstName, lastName, email, password, location, goods_type];
  console.log(password, "password");
  const query =
    "INSERT INTO seller (firstName, lastName, email, password, location, goods_type) VALUES (?,?,?,?,?,?);";
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
  const query = "SELECT * FROM seller";
  connection.query(query, (err, result) => {
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
