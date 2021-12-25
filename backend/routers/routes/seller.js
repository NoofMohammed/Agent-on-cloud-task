const express = require("express");
const sellerRouter = express.Router();
const {
  registerSeller,
  getAllSeller,
  getSellerById,
} = require("../controllers/seller");

sellerRouter.post("/", registerSeller);
sellerRouter.get("/", getAllSeller);
sellerRouter.get("/:id", getSellerById);

module.exports = sellerRouter;
