require("dotenv").config();

const express = require("express");
const rotaIntro = require("./routes/intro");
const rotaRetang = require("./routes/retangulo");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/intro", rotaIntro);
app.use("/api/retangulo", rotaRetang);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App inicializado na porta ${port}`);
});
