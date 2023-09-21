require("dotenv").config();

const express = require("express");
const rotaIntro = require("./routes/intro");
const rotaRetang = require("./routes/retangulo");
const rotaHome = require("./routes/home");
const rotaLista = require("./routes/lista");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/intro", rotaIntro);
app.use("/api/retangulo", rotaRetang);
app.use("/api/home", rotaHome);
app.use("/api/lista", rotaLista);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App inicializado na porta ${port}`);
});
