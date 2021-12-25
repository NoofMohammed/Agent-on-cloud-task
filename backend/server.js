const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
console.log(PORT, "llllllllllll");
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
