const express = require("express");
const router = express();

const data = require("../data.json");

// testando route
// Get to http://localhost:5000/api/data
router.get("/", (req, res) => {
  res.send("API esta funcionando!");
});

// Get to http://localhost:5000/api/data
router.get("/api/data", (req, res) => {
  res.json(data);
});

module.exports = router;
