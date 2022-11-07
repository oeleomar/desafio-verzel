const fs = require("fs");
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const removeArchive = require("../utils/removeArchive");
const checkToken = require("../middleware/checkToken");

const CarAddController = require("../controllers/Car/CarAddController");
const GetAllCars = require("../controllers/Car/GetAllCars");
const UpdateCarController = require("../controllers/Car/UpdateCarController");
const DeleteCarController = require("../controllers/Car/DeleteCarController");

const carAddController = new CarAddController();
const getAllCars = new GetAllCars();
const updateCarController = new UpdateCarController();
const deleteCarController = new DeleteCarController();

//Adicionar
routes.post(
  "/",
  checkToken,
  multer(multerConfig).single("picture"),
  async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "Foto não enviada" });
    if (Object.keys(req.body).length === 0) {
      removeArchive(req.file.path);
      return res.status(402).json({ error: "Dados não enviados" });
    }
    try {
      const result = await carAddController.handle(req.file, req.body);
      if (typeof result === "string") {
        removeArchive(req.file.path);
        return res.status(400).json({ error: result });
      }
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json({ error: "internal server error" });
    }
  },
);

//Atualizar
routes.put(
  "/:id",
  checkToken,
  multer(multerConfig).single("picture"),
  async (req, res) => {
    const { id } = req.params;
    let file = req.file;

    if (
      (!req.file && Object.keys(req.body).length === 0) ||
      Object.keys(req.body).length === 0
    )
      return res.status(400).json({ error: "Dados não enviados" });
    if (!req.file) file = null;

    const data = await updateCarController.handle(id, file, req.body);
    if (typeof data === "string") {
      if (file) removeArchive(file.path);
      return res.status(404).json({ error: data });
    }

    return res.json({ data: "Object updated" });
  },
);

//Deletar
routes.delete("/:id", checkToken, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await deleteCarController.handle(id);

  if (typeof data === "string") return res.status(404).json({ error: data });

  return res.json({ data: "Object deleted" });
});

//Buscar
routes.get("/", async (req, res) => {
  try {
    const data = await getAllCars.handle();
    if (!data) return res.status(404).json({ error: "Nenhum dado encontrado" });

    res.json({ data });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = routes;
