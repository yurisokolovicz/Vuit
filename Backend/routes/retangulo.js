const { Router } = require("express");
const { getRetanguloHome } = require("../controllers/retangulo");

const router = Router();

router.get("/", getRetanguloHome);

module.exports = router;
