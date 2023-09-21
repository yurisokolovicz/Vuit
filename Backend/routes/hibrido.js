const { Router } = require("express");
const { getHib } = require("../controllers/hibrido");

const router = Router();

router.get("/", getHib);

module.exports = router;
