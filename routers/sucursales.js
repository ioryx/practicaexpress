const express = require("express");
const router = express.Router();
const sucursalesControllers = require("../controllers/sucursalesControllers")

router.get("/", sucursalesControllers.index);
router.get("/:sucursal", sucursalesControllers.id);

module.exports = router