const connection = require("../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  console.log("function");
  let { email, password, userType } = req.body;
  console.log(req.body, "lllllllllllllllllllllllllllll");
  const data = [email];
  const salt = 10;

  const query = `SELECT * FROM ${userType} WHERE email = ?`;

  connection.query(query, data, async (err, result) => {
    console.log(result, "login");
    if (!result[0]) {
      return res.status(404).json("the email doesn't exist");
    }
    const confirm = await bcrypt.compare(password, result[0].password);
    console.log({ confirm });
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
