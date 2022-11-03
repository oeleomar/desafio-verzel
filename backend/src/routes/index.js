const router = require("express").Router();
const carsRoutes = require("./carsRoutes");

router.use("/car", carsRoutes);

module.exports = router;
