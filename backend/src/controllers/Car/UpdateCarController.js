const Car = require("../../models/Car/Car");
const removeArchive = require("../../utils/removeArchive");

module.exports = class UpdateCarController {
  async handle(id, file, body) {
    const car = await Car.findById(id);
    if (!car) return "Carro não encontrado";

    if (file) {
      removeArchive(car.pathFoto);
      const { filename: foto, path: pathFoto } = file;
      const { nome, modelo, marca, preco, ano } = body;
      const newCar = await Car.updateOne({
        nome,
        modelo,
        marca,
        preco,
        ano,
        foto,
        pathFoto,
      });

      return newCar;
    }

    const { nome, modelo, marca, preco, ano } = body;
    const newCar = await Car.updateOne({
      nome,
      modelo,
      marca,
      preco,
      ano,
    });

    return newCar;
  }
};
