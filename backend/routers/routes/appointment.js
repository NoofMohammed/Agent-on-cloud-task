const express = require("express");
const appointmentRouter = express.Router();
const {
  creatAppointment,
  getAllAppointment,
  getAppointmentById,
} = require("../controllers/appointment");

appointmentRouter.post("/", creatAppointment);
appointmentRouter.get("/", getAllAppointment);
appointmentRouter.get("/:id", getAppointmentById);

module.exports = appointmentRouter;
