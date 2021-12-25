const connection = require("../../db/db");

const getAllAppointment = () => {
  const query = "SELECT * from appointment";
  connection.query(query, (err, result) => {
    if (err) {
      return res.json({ message: error.message });
    }
    res.json(result);
  });
};
module.exports = {
  getAllAppointment,
};
