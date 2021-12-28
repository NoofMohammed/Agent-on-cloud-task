const bcrypt = require("bcrypt");
const connection = require("../../db/db");
//register buyer
const registerBuyer = async (req, res) => {
  let { firstName, lastName, password, email } = req.body;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  const data = [firstName, lastName, password, email];
  const query =
    "INSERT INTO buyer (first_name, last_name, password, email) VALUES (?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
// get all buyer
const getAllBuyer = (req, res) => {
  const query = "SELECT * FROM buyer";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
// get all buyer by Buyer id
const getBuyerById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM buyer WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = { registerBuyer, getAllBuyer, getBuyerById };
