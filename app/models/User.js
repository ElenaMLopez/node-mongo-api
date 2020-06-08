const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "normal",
    enum: ["normal", "admin"],
  },
  password: {
    type: String,
    required: true,
  },
  singUpDate: {
    type: Date,
    default: Date.now(),
  },
  lastLoginDate: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", function (next) {
  // .pre() is a mongoose method, that apply a function before make another from controller
  bcrypt
    .genSalt(10)
    .then((salts) => {
      bcrypt
        .hash(this.password, salts)
        .then((hash) => {
          this.password = hash;
          next();
        })
        .catch((error) => next(error));
    })
    .catch((error) => next(error));
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
