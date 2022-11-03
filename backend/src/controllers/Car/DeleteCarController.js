const Car = require("../../models/Car/Car");
const removeArchive = require("../../utils/removeArchive");

module.exports = class DeleteCarController {
  async handle(id) {
    const carExist = await Car.findById(id);
    console.log(carExist);
    if (!carExist) return "Carro não encontrado";

    removeArchive(carExist.pathFoto);
    const deleted = await Car.deleteOne({ _id: id });

    return deleted;
  }
};
