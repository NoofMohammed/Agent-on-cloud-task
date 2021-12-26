const connection = require("../../db/db");

const creatAppointment = (req, res) => {
  const { buyer_id, seller_id } = req.body;
  const data = [buyer_id, seller_id];
  const query = "INSERT INTO appointment (buyer_id, seller_id) VALUES (?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};

const getAllAppointment = (req, res) => {
  const query = "SELECT * from appointment";
  connection.query(query, (err, result) => {
    if (err) {
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
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
};
