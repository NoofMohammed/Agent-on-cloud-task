// buyerRouter
const express = require("express");
const authentication = require("../middlewares/authentication");

const buyerRouter = express.Router();

const {
  registerBuyer,
  getAllBuyer,
  getBuyerById,
} = require("../controllers/buyer");

buyerRouter.post("/", registerBuyer);
buyerRouter.get("/", authentication, getAllBuyer);
buyerRouter.get("/:id", authentication, getBuyerById);

module.exports = buyerRouter;
