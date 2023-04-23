const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

connect();

module.exports = connect;
