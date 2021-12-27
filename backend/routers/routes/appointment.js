const express = require("express");
const appointmentRouter = express.Router();
const {
  creatAppointment,
  getAllAppointment,
  getAppointmentById,
  allAppointment,
} = require("../controllers/appointment");

appointmentRouter.post("/", creatAppointment);
appointmentRouter.get("/", getAllAppointment);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.get("/booking/:seller_id", allAppointment);

module.exports = appointmentRouter;
