const express = require("express");
const router = express();

const servicosVuit = require("../database/servicosVuit.json");
const vantagensVut = require("../database/vantagensVuit.json");

// testando route
router.get("/", (req, res) => {
  res.send("API esta funcionando!");
});

router.get("/api/servicos", (req, res) => {
  try {
    if (!servicosVuit) {
      throw new Error("Os servicos nao estao disponiveis.");
    }
    res.json(servicosVuit);
  } catch (error) {
    next(error);
  }
});

router.get("/api/vantagens", (req, res) => {
  try {
    if (!vantagensVut) {
      throw new Error("As vantagens nao estao disponiveis.");
    }
    res.json(vantagensVut);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
