const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://subhammaharana1307:Subham%401307@bookapi.rnbiotz.mongodb.net/?retryWrites=true&w=majority";

const databaseConnection = async () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

module.exports = databaseConnection;
