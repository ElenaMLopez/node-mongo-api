const express = require("express");
const UserCtrl = require("../controllers/UserController");

const Router = express.Router();

Router.get("/", UserCtrl.index) // All users: api.com/user
  .get("/:key/:value",UserCtrl.find, UserCtrl.show) // One user: api.com/user/user_id
  .post("/", UserCtrl.create) // Create a user: api.com/user
  .put("/:key/:value", UserCtrl.find, UserCtrl.update) // Edit user: api.com/user/update
  .delete("/:key/:value",UserCtrl.find, UserCtrl.remove); // Remove a user: api.com/user/remove

module.exports = Router;
