const mongoose = require("mongoose");
require("dotenv/config");

const uri = process.env.MONGODB;

const initializeDatabase = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
module.exports = { initializeDatabase };
