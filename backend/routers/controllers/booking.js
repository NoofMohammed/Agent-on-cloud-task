const connection = require("../../db/db");

const creatBooking = (req, res) => {
  const { time, date } = req.body;
  const data = [time, date];
  const query = "INSERT INTO booking (time, date) VALUES (?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
const getAllBooking = (req, res) => {
  const query = "SELECT * FROM booking";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getBookingById = (req, res) => {
  const id = req.params.id;
  console.log(id, "iiidddd");
  const query = `SELECT * FROM booking WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    console.log(result, "result");
    res.json(result);
  });
};
module.exports = { creatBooking, getAllBooking, getBookingById };
