const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

const sellerRouter = require("./routers/routes/seller");
const buyerRouter = require("./routers/routes/buyer");
const loginRouter = require("./routers/routes/login");
const appointmentRouter = require("./routers/routes/appointment");
const bookingRouter = require("./routers/routes/booking");

app.use("/login", loginRouter);
app.use("/seller", sellerRouter);
app.use("/buyer", buyerRouter);
app.use("/appointment", appointmentRouter);
app.use("/booking", bookingRouter);

const PORT = process.env.PORT;
console.log(PORT, "llllllllllll");
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
