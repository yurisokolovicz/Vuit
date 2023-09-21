const { getLista } = require("../services/lista");

function getListaCompleta(req, res) {
  try {
    const lista = getLista();
    res.send(lista);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getListaCompleta,
};
