const { Router } = require("express");
const { getIntroducao } = require("../controllers/intro");

const router = Router();

router.get("/", getIntroducao);

module.exports = router;
