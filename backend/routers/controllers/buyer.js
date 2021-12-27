const connection = require("../../db/db");

const registerBuyer = (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  const data = [firstName, lastName, password, email];
  const query =
    "INSERT INTO buyer (firstName, lastName, password, email) VALUES (?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};

const getAllBuyer = (req, res) => {
  const query = "SELECT * FROM buyer";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getBuyerById = (req, res) => {
  const id = req.params.id;
  console.log(id, "iiidddd");
  const query = `SELECT * FROM buyer WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    console.log(result, "result");
    res.json(result);
  });
};
module.exports = { registerBuyer, getAllBuyer, getBuyerById };
