const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const MONGODB_URI = process.env.MONGODB_URI;

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

