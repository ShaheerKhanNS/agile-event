const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const sequelize = require("./util/database");

const bodyParser = require("body-parser");

const eventRouter = require("./routes/eventRoutes");
const Event = require("./model/event");

// Starting App

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v3/app", eventRouter);

sequelize
  .sync({ force: true })
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log(`App running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
