const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const sequelize = require("./util/database");

// Starting App

const app = express();

const Event = require("./model/event");

sequelize
  .sync()
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`App running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
