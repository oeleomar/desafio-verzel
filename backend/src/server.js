const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const env = require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("temp"));
app.use(routes);
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(3000);
    console.log("Server iniciado no localhost");
  })
  .catch((e) => console.log(e));
