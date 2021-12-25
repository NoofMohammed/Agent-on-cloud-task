const express = require("express");
const buyerRouter = express.Router();
const {
  registerBuyer,
  getAllBuyer,
  getBuyerById,
} = require("../controllers/buyer");

buyerRouter.post("/", registerBuyer);
buyerRouter.get("/", getAllBuyer);
buyerRouter.get("/:id", getBuyerById);

module.exports = buyerRouter;
