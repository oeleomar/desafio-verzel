const Car = require("../../models/Car/Car");

module.exports = class CarAddController {
  async handle(file, body) {
    const { nome, marca, modelo, preco, ano } = body;
    const { filename: foto, path: pathFoto } = file;
    if (!nome || !marca || !modelo || !preco || !foto || !pathFoto)
      return "Dados inválidos";

    const carAlreadyExist = await Car.findOne({ nome, marca, modelo });
    if (carAlreadyExist) return "Carro já cadastrado";

    const car = await Car.create({
      nome,
      modelo,
      marca,
      preco,
      ano,
      foto,
      pathFoto,
    });

    return car;
  }
};
