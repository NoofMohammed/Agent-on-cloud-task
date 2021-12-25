const { json } = require("body-parser");
const connection = require("../../db/db");

const login = (req, res) => {
  const { email, password, userType } = req.body;
  const data = [email, password, userType];
  let query;
  if (userType == "Seller") {
    query = `SELECT * FROM buyer WHERE email = ?`;
  }
  if (userType == "Buyer") {
    query = `SELECT * FROM buyer WHERE email = ?`;
  }
  connection.query(query, data, (err, result) => {
    console.log(result, "login");
    if (!result[0]) {
      return res.status(404).json("the email doesn't exist");
    }
    const confirm = await bcrypt.compare(password, result[0].password);
    if (confirm) {
      const payload = {
        name: result[0].name,
        password: result[0].password,
      };
      const options = {
        expiresIn: "1d",
      };
      res.status(200).json({
        token: jwt.sign(payload, process.env.SECRET, options),
        user: result[0],
      });
    } else {
      res.status(403).json("The password is not correct");
    }
  });
};

module.exports = {
  login,
};
