const express = require("express");
const router = express();

const data = require("../data.json");

// testando route
router.get("/", (req, res) => {
  res.send("API esta funcionando!");
});

router.get("/api/data", (req, res) => {
  try {
    if (!data) {
      throw new Error("Os dados nao estao disponiveis.");
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
