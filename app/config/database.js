/**
 * Here we have the Data Base connection
 */

const mongoose = require("mongoose");
const CONFIG = require("./config");

module.exports = {
  connection: null,
  connect: function () {
    if (this.connection) return this.connection;
    return mongoose
      .connect(CONFIG.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((connection) => {
        this.connection = connection;
        console.log("Conexión con MongoDB exitosa! ");
      })
      .catch((error) => console.log("Error de conexión con MongoDB: ", error));
  },
};
