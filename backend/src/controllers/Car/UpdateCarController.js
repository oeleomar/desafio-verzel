const Car = require("../../models/Car/Car");
const removeArchive = require("../../utils/removeArchive");

module.exports = class UpdateCarController {
  async handle(id, file, body) {
    // Buscar carro
    const car = await Car.findById(id);
    if (!car) return "Carro não encontrado";

    //Deletar foto antiga do carro caso a nova exista
    if (file) {
      removeArchive(car.pathFoto);
      const { filename: foto, path: pathFoto } = file;
      const { nome, modelo, marca, preco } = body;
      const newCar = await Car.updateOne({
        nome,
        modelo,
        marca,
        preco,
        foto,
        pathFoto,
      });

      return newCar;
    }

    const { nome, modelo, marca, preco } = body;
    const newCar = await Car.updateOne({
      nome,
      modelo,
      marca,
      preco,
    });

    return newCar;
  }
};
