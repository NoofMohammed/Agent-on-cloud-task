const express = require("express");
const appointmentRouter = express.Router();
const { getAllAppointment } = require("../controllers/appointment");

appointmentRouter.get("/", getAllAppointment);

module.exports = appointmentRouter;
