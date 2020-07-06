const express = require("express");
const router = express.Router();
const homeControllers = require("../controllers/homeControllers")

router.get("/", homeControllers.index);
router.get("/:sucursal", homeControllers.id);

module.exports = router