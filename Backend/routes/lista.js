const { Router } = require("express");
const { getListaCompleta } = require("../controllers/lista");

const router = Router();

router.get("/", getListaCompleta);

module.exports = router;
