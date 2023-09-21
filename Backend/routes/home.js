const { Router } = require("express");
const { getParagHome } = require("../controllers/home");

const router = Router();

router.get("/", getParagHome);

module.exports = router;
