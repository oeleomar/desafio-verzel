const router = require("express").Router();
const carsRoutes = require("./carsRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/car", carsRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
