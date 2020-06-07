const express = require("express");
const ProductCtrl = require("../controllers/ProductController");

const Router = express.Router();

Router.get("/", ProductCtrl.index) // api.com/product/ Index: List all products
  .get("/:key/:value", ProductCtrl.find, ProductCtrl.show) // api.com/product/Hogar Show: Show a product
  .post("/:key/:value", ProductCtrl.find, ProductCtrl.create) // api.com/product/ Create: Create a product
  .put("/:key/:value", ProductCtrl.find, ProductCtrl.update) // api.com/product/name/SamsungGalaxy Update: Edit and update a product
  .delete("/:key/:value", ProductCtrl.find, ProductCtrl.remove); // api.com/product/name/SamsunGalaxy Delete: Remove a product

module.exports = Router;
