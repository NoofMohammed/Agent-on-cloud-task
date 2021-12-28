const connection = require("../../db/db");
// creat appointment for booking appointment
const creatAppointment = (req, res) => {
  const { timeStamp, state, buyer_id, seller_id } = req.body;
  console.log(req.body, "ffffffffffffffffffffffffffffff");
  const data = [timeStamp, state, buyer_id, seller_id];
  const query =
    "INSERT INTO appointment ( timeStamp, state, buyer_id, seller_id) VALUES (?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
// get all appointment
const getAllAppointment = (req, res) => {
  const query = "SELECT * from appointment";
  connection.query(query, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
// get all data buyer and appointment
const allAppointment = (req, res) => {
  const { seller_id } = req.params;
  const query = `SELECT *
  FROM buyer 
  INNER JOIN appointment
  ON  buyer.id = appointment.buyer_id
  WHERE seller_id =${seller_id}`;
  connection.query(query, seller_id, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
//get appointment by id
const getAppointmentById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM appointment WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};

module.exports = {
  creatAppointment,
  getAllAppointment,
  getAppointmentById,
  allAppointment,
};
