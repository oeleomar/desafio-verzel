const Car = require("../../models/Car/Car");

module.exports = class GetAllCars {
  async handle() {
    const data = await Car.find().sort({ preco: "ascending" });
    if (!data) return null;

    return data;
  }
};
