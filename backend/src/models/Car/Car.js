const mongoose = require("mongoose");

const car = mongoose.Schema({
  nome: String,
  marca: String,
  modelo: String,
  preco: Number,
  foto: String,
  pathFoto: String,
});

module.exports = mongoose.model("car", car);
