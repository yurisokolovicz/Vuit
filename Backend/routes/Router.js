const express = require("express");
const router = express();

// testando route
router.get("/", (req, res) => {
    res.send("API esta funcionando!")
    // Enviando uma requisicao get para http://localhost:5000/
})

module.exports = router;