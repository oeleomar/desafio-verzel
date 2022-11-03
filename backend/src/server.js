const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/car");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("temp"));
app.use(routes);

app.listen(3000);
