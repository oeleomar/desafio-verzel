const Car = require("../../models/Car/Car");

module.exports = class GetAllCars {
  async handle() {
    const data = await Car.find();

    if (!data) return null;

    return data;
  }
};
