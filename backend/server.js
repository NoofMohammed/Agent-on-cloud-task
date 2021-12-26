const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());
const sellerRouter = require("./routers/routes/seller");
const buyerRouter = require("./routers/routes/buyer");
const loginRouter = require("./routers/routes/login");
const appointmentRouter = require("./routers/routes/appointment");
app.use("/seller", sellerRouter);
app.use("/buyer", buyerRouter);
app.use("/login", loginRouter);
app.use("/appointment", appointmentRouter);

const PORT = process.env.PORT;
console.log(PORT, "llllllllllll");
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
