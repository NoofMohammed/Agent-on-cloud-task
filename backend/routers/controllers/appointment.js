const connection = require("../../db/db");
// creat appointment for booking appointment
const creatAppointment = (req, res) => {
  const { timeStamp, state, buyerId, sellerId } = req.body;
  const data = [timeStamp, state, buyerId, sellerId];
  const query =
    "INSERT INTO appointment ( date, state, buyer_id, seller_id) VALUES (?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
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
  const query = `SELECT * FROM appointment WHERE buyer_id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};

const updateAppointmentById = (req, res) => {
  const { id } = req.params;
  const { state } = req.body;

  const query = `UPDATE appointment SET state = ? WHERE id = ${id}
  `;
  connection.query(query, [state], (err, result) => {
    if (err) {
      console.log(err);
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
  updateAppointmentById,
};
