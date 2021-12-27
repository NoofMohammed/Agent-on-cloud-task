const express = require("express");
const bookingRouter = express.Router();
const {
  creatBooking,
  getAllBooking,
  getBookingById,
} = require("../controllers/booking");

bookingRouter.post("/", creatBooking);
bookingRouter.get("/", getAllBooking);
bookingRouter.get("/:id", getBookingById);

module.exports = bookingRouter;
