// appointmentRouter
const express = require("express");
const authentication = require("../middlewares/authentication");

const appointmentRouter = express.Router();
const {
  creatAppointment,
  getAllAppointment,
  getAppointmentById,
  allAppointment,
  updateAppointmentById,
} = require("../controllers/appointment");

appointmentRouter.post("/", authentication, creatAppointment);
appointmentRouter.get("/", authentication, getAllAppointment);
appointmentRouter.get("/:id", authentication, getAppointmentById);
appointmentRouter.get("/seller/:seller_id", authentication, allAppointment);
appointmentRouter.put("/seller/:id", authentication, updateAppointmentById);

module.exports = appointmentRouter;
