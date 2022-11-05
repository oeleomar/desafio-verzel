const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const helmet = require("helmet");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("temp"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept",
  );
  next();
});
app.use(helmet());

app.use(routes);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(3000);
    console.log("Server iniciado no localhost");
  })
  .catch((e) => console.log(e));
