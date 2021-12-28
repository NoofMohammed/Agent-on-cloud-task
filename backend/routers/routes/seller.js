const express = require("express");
const sellerRouter = express.Router();
const authentication = require("../middlewares/authentication");
const {
  registerSeller,
  getAllSeller,
  getSellerById,
} = require("../controllers/seller");

sellerRouter.post("/", registerSeller);
sellerRouter.get("/", authentication, getAllSeller);
sellerRouter.get("/:id", getSellerById);

module.exports = sellerRouter;
