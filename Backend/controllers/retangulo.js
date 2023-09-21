const { getRetangulo } = require("../services/retangulo");

function getRetanguloHome(req, res) {
  try {
    const retangulo = getRetangulo();
    res.send(retangulo);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getRetanguloHome,
};
